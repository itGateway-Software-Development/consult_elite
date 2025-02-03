<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const getChildRoute = () => {
  let route_segments = router.currentRoute.value.path.split('/').filter(Boolean)
  return route_segments[1] || '/';
}
</script>
<template>
    <ul class="absolute top-8 bg-[#fff]/30 border border-t-default-400 backdrop-blur-lg shadow-lg p-2 rounded-lg -ml-10 w-60 flex flex-col gap-1 opacity-0 invisible transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-10">
        <li class="font-semibold text-sm px-3 py-1 rounded text-slate-700 hover:bg-slate-200">What We Do</li>
        <li class="font-semibold text-sm px-3 py-1 rounded text-slate-700 hover:bg-slate-200">Founder & President</li>
        <RouterLink to="/what-we-do/about-us"><li :class="`font-semibold text-sm px-3 py-1 rounded text-slate-700 hover:bg-slate-200 ${getChildRoute() === 'about-us' ? 'bg-slate-200' : ''}`">About Us</li></RouterLink>
        <li class="font-semibold text-sm px-3 py-1 rounded text-slate-700 hover:bg-slate-200">Success Story</li>
        <RouterLink to="/what-we-do/work-with-us"><li :class="`font-semibold text-sm px-3 py-1 rounded text-slate-700 hover:bg-slate-200 ${getChildRoute() === 'work-with-us' ? 'bg-slate-200' : ''}`">Work With Us</li></RouterLink>
        <RouterLink to="/what-we-do/contact-us"><li :class="`font-semibold text-sm px-3 py-1 rounded text-slate-700 hover:bg-slate-200 ${getChildRoute() === 'contact-us' ? 'bg-slate-200' : ''}`">Contact Us</li></RouterLink>
      </ul>
</template>