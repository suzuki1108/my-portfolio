import { Display } from "@/types/Display";
import { inject, Ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";

export type RouteModel = {
  display: Display[] | undefined;
  currentRoute: Ref<string> | undefined;
};

export const CommonBeforeRouteEnter = (): RouteModel => {
  const display = inject<Display[]>("Display");
  const currentRoute = inject<Ref<string>>("currentRoute");

  onBeforeRouteLeave((to, from) => {
    if (!currentRoute) {
      console.error(from);
      return;
    }
    currentRoute.value = to.path;
  });

  return {
    display,
    currentRoute,
  };
};
