@foreach($posts as $post)
    @include('new.include.item', compact('post'))
@endforeach
