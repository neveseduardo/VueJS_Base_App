<template>
    <div class="content">
        <div class="container-fluid">
            <transition name="fade" mode="out-in">
                <!-- your content here -->
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

