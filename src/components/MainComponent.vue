<template>
  <div class="tw-p-10 tw-flex tw-space-x-6">
    <q-card v-for="item in store.data" :key="item.id" @click="redirectToCard(item)"
      class="tw-w-80 t cursor-pointer tw-rounded-[15px] tw-shadow-md hover:tw-shadow-xl hover:tw-bg-stone-100 tw-transition">
      <q-card-section>
        <div class="text-h6">
          {{ item.artist }}
        </div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section> </q-card-section>
      <q-card-section>Жанр: {{ item.genre }} </q-card-section>
      <q-card-actions align="right">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { useMusicStore } from "../stores/music"
import { TArtist } from "./models"
import { onMounted } from "vue"
const store = useMusicStore()
const router = useRouter()

onMounted(() => {
  const localStoreCardData = JSON.parse(
    localStorage.getItem("artist") as string
  )
  if (localStoreCardData) {
    const targetIndex = store.data.findIndex(
      (artist: TArtist) => artist.id === localStoreCardData.id
    )
    if (targetIndex !== -1) {
      store.data.splice(targetIndex, 1, localStoreCardData)
    }
  }
})
const redirectToCard = (payload: TArtist): void => {
  store.selectedCard = payload
  localStorage.setItem("artist", JSON.stringify(payload))
  router.push("/card")
}
</script>
