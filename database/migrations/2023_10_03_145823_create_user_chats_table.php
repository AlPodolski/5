<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('user_chats', function (Blueprint $table) {
            $table->id();
            $table->integer('chat_id');
            $table->integer('user_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_chats');
    }
};
