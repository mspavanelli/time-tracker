<script setup lang="ts">
import {
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import SidebarProvider from "@/components/ui/sidebar/SidebarProvider.vue";

import Content from "./Content.vue";
</script>

<template>
  <SidebarProvider class="w-fit">
    <Sidebar collapsible="icon" class="rounded-r-lg bg-sky-700">
      <SidebarHeader />
      <Content />
    </Sidebar>
  </SidebarProvider>
</template>
