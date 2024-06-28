<template>
  <div class="tw-p-10 tw-flex tw-space-x-6">
    <div>
      <div class="flex tw-items-center tw-font-bold tw-text-2xl tw-mb-20">
        <img class="tw-mr-2 tw-cursor-pointer hover:tw-bg-stone-100 tw-p-0.5 tw-transition tw-rounded-full"
          src="../assets/icons/arrow-left.png" alt="назад" title="назад" @click="$router.back()" />
        <div class="tw-flex tw-items-center tw-space-x-2 tw-bg-stone-100 tw-py-2 tw-px-6 tw-rounded-full">
          <span>{{ store.selectedCard?.artist }}</span>
          <span>|</span>
          <span class="tw-text-base">{{ store.selectedCard?.genre }}</span>
        </div>
      </div>

      <span class="tw-font-bold tw-text-lg tw-mb-4 tw-bg-stone-100 tw-py-1 tw-px-4 tw-rounded-full">Альбомы
      </span>
      <div class="tw-flex items-start tw-space-x-4 tw-mt-4">
        <q-card v-for="album in store.selectedCard?.albums" :key="album.albumId"
          class="tw-mb-6 tw-w-80 tw-rounded-[15px] tw-shadow-md">
          <q-card-section>
            <span class="tw-font-semibold tw-text-base">{{ album.name }}</span>
            <span> | {{ album.year }}</span>
          </q-card-section>
          <q-separator color="red" />
          <q-card-section>
            <ul>
              <li v-for="song in album.songs" :key="song.id">
                {{ song.id + 1 }}. {{ song.name }}
              </li>
            </ul>
          </q-card-section>
          <q-separator />
          <q-card-actions align="right">
            <q-btn label="добавить песню" rounded flat style="color: #fc5871" @click="openDialog(album)"></q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <Form v-if="formVisible" :visible="formVisible" @hideDialog="hideDialog" />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue"
import Form from "./FormComponent.vue"
import { useMusicStore } from "src/stores/music"
import { TAlbum, TSong } from "./models"

onMounted(() => {
  const localStoreCardData = JSON.parse(
    localStorage.getItem("artist") as string
  )
  if (localStoreCardData) {
    store.selectedCard = localStoreCardData
  }
})

const store = useMusicStore()
const formVisible = ref(false)
const selectedAlbum = ref<TAlbum>()
const openDialog = (payload: TAlbum) => {
  selectedAlbum.value = payload
  formVisible.value = true
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const hideDialog = (payload: string): void => {
  if (!payload) {
    formVisible.value = false
    return
  }
  let max: number = selectedAlbum.value?.songs.reduce(
    (acc: TSong, curr: TSong) => (acc.id > curr.id ? acc : curr)
  ).id as number
  selectedAlbum.value?.songs.push({
    name: payload,
    albumId: selectedAlbum.value.albumId,
    id: max + 1,
  })
  localStorage.setItem("artist", JSON.stringify(store.selectedCard))
  formVisible.value = false
}
</script>
<style></style>
