<template lang="">
  <div class="tw-rounded-[15px]">
    <q-dialog persistent :model-value="visible">
      <q-card>
        <q-card-section>
          <div class="tw-w-96">
            <q-input
              rounded
              v-model="songName"
              label="введите название песни"
            />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            flat
            label="сохранить"
            color="green"
            rounded
            v-close-popup
            @click="onClickDialogButton(true)"
          />
          <q-btn
            flat
            label="отменить"
            color="red"
            rounded
            v-close-popup
            @click="onClickDialogButton(false)"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  visible: boolean
}>()

const emit = defineEmits(["hideDialog"])

const songName = ref<string>("")
const onClickDialogButton = (e: boolean): void =>
  e ? emit("hideDialog", songName.value) : emit("hideDialog")
</script>
