<?php

namespace App\Http\Controllers;

use App\Actions\AddViewToCookie;
use App\Actions\GenerateBreadcrumbMicro;
use App\Actions\GenerateImageMicro;
use App\Actions\GenerateProductMicroForSingle;
use App\Services\SingleMetaService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class PostController extends Controller
{

    private GenerateBreadcrumbMicro $breadMicro;
    private GenerateImageMicro $imageMicro;

    public function __construct()
    {
        $this->breadMicro = new GenerateBreadcrumbMicro();
        $this->imageMicro = new GenerateImageMicro();

        parent::__construct();
    }

    public function __invoke($city,$url, SingleMetaService $metaService, Request $request, AddViewToCookie $addViewToCookie)
    {
        $cityInfo = $this->cityRepository->getCity($city);
        $post = $this->postRepository->getSingle($url);
        if (!$post) abort(404);
        $data = $this->dataRepository->getData($cityInfo['id']);

        $meta = $metaService->makeMetaTags($post, $cityInfo);
        $breadMicro = $this->breadMicro->generate($request, $post->name);
        $imageMicro = $this->imageMicro->generate($post, $cityInfo['city']);
        $productMicro = (new GenerateProductMicroForSingle($post))->generate();

        $viewCount = Redis::INCR('post:view:'.$post->id);

        $morePosts = $this->postRepository->getMore($cityInfo['id'], 3);

        $addViewToCookie->add($post->id);

        $viewPosts = $this->postRepository->getView();

        return view('new.post.index', compact(
            'post', 'data', 'meta', 'breadMicro', 'imageMicro', 'morePosts', 'viewPosts', 'productMicro', 'viewCount'
        ));
    }
}
