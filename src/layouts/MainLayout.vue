<template>
  <q-layout>
    <q-header elevated class="tw-bg-slate-700">
      <div class="tw-h-14 tw-mx-10 flex items-center tw-text-xl">
        <router-link to="/">
          Qortex music
        </router-link>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
</script>
