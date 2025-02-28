import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div id="tokenomics" class="px-4 pt-3 pb-6 md:py-16 sm:px-6 mx-auto md:px-24 lg:px-8  lg:pb-20 lg:py-4 max-w-7xl">
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
      <div class="text-center md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary-600 font-heading">
            100%
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Fair Launch
          </p>
        </div>
        <div class="text-center md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary-600 font-heading">
            1 Billion
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Total Supply
          </p>
        </div>
     
        <div class="text-center md:border-r dark:md:border-slate-500 font-heading">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary-600">
            0.1%
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Team Allocation
          </p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary-600 font-heading">
            100+
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Community Members
          </p>
        </div>
      </div>
    </div>
  );
});
