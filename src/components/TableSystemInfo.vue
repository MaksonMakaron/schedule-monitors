<template>
  <table class="table">
    <tr>
      <th class="cell-heading">Опция</th>
      <th class="cell-heading">Значение</th>
    </tr>
    <tr class="row">
      <td class="cell">Средняя нагрузка</td>
      <td class="cell">{{ systemInfo.loadAvg }}</td>
    </tr>
    <tr class="row">
      <td class="cell">Свободное пространство</td>
      <td class="cell">{{ systemInfo.freeSpace }}</td>
    </tr>
    <tr class="row">
      <td class="cell">Память</td>
      <td class="cell">{{ systemInfo.memory }}</td>
    </tr>
    <tr class="row">
      <td class="cell">Рабочее время</td>
      <td class="cell">{{ systemInfo.uptime }}</td>
    </tr>
    <tr class="row">
      <td class="cell">Монитор</td>
      <td class="cell">{{ systemInfo.monitorInfo }}</td>
    </tr>
    <tr class="row">
      <td class="cell">Мощность дисплея</td>
      <td class="cell">{{ systemInfo.displayPower }}</td>
    </tr>
    <tr class="row">
      <td class="cell">Модель Raspberry Pi</td>
      <td class="cell">{{ systemInfo.raspberry }}</td>
    </tr>
    <tr class="row">
      <td class="cell">Версия Anthias</td>
      <td class="cell">{{ systemInfo.anthiasVers }}</td>
    </tr>
    <tr class="row">
      <td class="cell">MAC-адрес</td>
      <td class="cell">{{ systemInfo.macAdd }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    systemInfo: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.cell-heading {
  padding: 11px;
  text-align: left;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #6c757d;
  border-bottom: 3px solid #dee2e6;
}

.cell {
  padding: 11px;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #212529;
  border-bottom: 1px solid #dee2e6;
}

tr:last-child td {
  border-bottom: none;
}

tr td:first-child,
th:first-child {
  width: 220px;
}
</style>
