<template>
    <div class="grid md:grid-cols-2 gap-4">
        <!-- 1st Box-->
        <div class="shadow-md bg-green-100 p-10 text-center rounded">
            <h3 class="text-3xl text-red-900 font-bold mb-4">Cases</h3>
            <div class="text-2xl mb-4">
                <span class="font-bold">New: </span>
                <!-- newConfirmed comes from API -->
                {{ numberWithCommas(stats.NewConfirmed) }}
            </div>
            <div class="text-2xl mb-4">
                <span class="font-bold">Total: </span>
                <!-- totalConfirmed comes from API -->
                {{  numberWithCommas(stats.TotalConfirmed) }}
            </div>
        </div>
        <!-- 2nd Box -->
        <div class="shadow-md bg-green-200 p-10 text-center rounded">
            <h3 class="text-3xl text-red-900 font-bold mb-4">Deaths</h3>
            <div class="text-2xl mb-4">
                <span class="font-bold">New: </span>
                <!-- newDeaths comes from API -->
                {{ numberWithCommas(stats.NewDeaths) }}
            </div>
            <div class="text-2xl mb-4">
                <span class="font-bold">Total: </span>
                <!-- totalDeaths comes from API -->
                {{ numberWithCommas(stats.TotalDeaths) }}
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'DataBoxes',
  props: ['stats'],
  setup () {
    return {
      numberWithCommas (x) {
        return x.toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    };
  }
};
</script>
