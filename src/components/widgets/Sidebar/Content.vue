<script setup lang="ts">
import { SidebarContent, useSidebar } from "@/components/ui/sidebar";

const { open } = useSidebar();

const links = [
  {
    label: "Tarefas",
    to: "/",
  },
];
</script>

<template>
  <SidebarContent>
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem
          v-for="link in links"
          :key="link.label"
          class="flex items-center justify-start"
        >
          <NuxtLink
            :to="link.to"
            class="flex w-full items-center rounded-md"
            active-class=" bg-[hsla(0,0%,100%,0.16)]"
          >
            <SidebarMenuButton as-child class="">
              <transition name="item-fade">
                <span
                  v-show="open"
                  class="whitespace-nowrap text-base font-light text-white"
                >
                  {{ link.label }}</span
                >
              </transition>
            </SidebarMenuButton>
          </NuxtLink>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  </SidebarContent>
</template>

<style scoped>
.item-fade-enter-active,
.item-fade-leave-active {
  @apply duration-200;
}
.item-fade-enter-from,
.item-fade-leave-to {
  @apply opacity-0;
}
</style>
