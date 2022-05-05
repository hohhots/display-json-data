<template>
  <div link="blue" vlink="purple" class="xl65">
    <table
      width="1134.95"
      border="0"
      cellpadding="0"
      cellspacing="0"
      style="width: 1134.95pt; border-collapse: collapse; table-layout: fixed"
    >
      <col width="12.90" class="xl65" />
      <col width="179.05" class="xl65" />
      <col width="94.30" span="10" class="xl65" />
      <col width="58.05" span="16363" class="xl65" />
      <col width="57.60" span="9" class="xl65" />
      <tbody>
        <tr height="27.80" style="height: 27.8pt">
          <td
            height="27.80"
            width="12.90"
            style="height: 27.8pt; width: 12.9pt"
          ></td>
          <td
            class="xl66"
            width="1122.05"
            colspan="11"
            style="
              width: 1122.05pt;
              border-right: none;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            全市第 &nbsp; &nbsp; 轮核酸检测,截至{{ day.format('M') }}月{{ day.format('D') }}日{{ day.format('HH') }}:{{ day.format('mm') }}
            情况
          </td>
        </tr>
        <tr height="27.80" style="height: 27.8pt">
          <td height="27.80" style="height: 27.8pt"></td>
          <td
            class="xl67"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
          ></td>
          <td
            class="xl68"
            rowspan="2"
            style="border-right: none; border-bottom: 0.5pt solid windowtext"
            x:str
          >
            目标人数
          </td>
          <td
            class="xl69"
            colspan="3"
            style="
              border-right: 2pt double windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            采样数
          </td>
          <td
            class="xl77"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            送检
          </td>
          <td
            class="xl78"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            检测机构接收数
          </td>
          <td
            class="xl68"
            rowspan="2"
            style="border-right: none; border-bottom: 0.5pt solid windowtext"
            x:str
          >
            检测出结果数
          </td>
          <td
            class="xl81"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            采样率
          </td>
          <td
            class="xl78"
            rowspan="2"
            style="
              border-right: 0.5pt solid windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            实验室接收率
          </td>
          <td
            class="xl82"
            rowspan="2"
            style="
              border-right: 2pt double windowtext;
              border-bottom: 0.5pt solid windowtext;
            "
            x:str
          >
            样本检测率
          </td>
        </tr>
        <tr height="27.80" style="height: 27.8pt">
          <td height="27.80" style="height: 27.8pt"></td>
          <td class="xl72" x:str>采样总数</td>
          <td class="xl73" x:str>系统内采样数</td>
          <td class="xl79" x:str>系统外采样数</td>
        </tr>
        <tr height="27.80" style="height: 27.8pt" v-for="(area, index) in lastData" :key="index">
          <td height="27.80" style="height: 27.8pt"></td>
          <td class="xl73" x:str>{{ area.name }}</td>
          <td class="xl71">{{ area.people }}</td>
          <td class="xl72">{{ area.collectNum }}</td>
          <td class="xl71">{{ area.collectNum }}</td>
          <td class="xl79"></td>
          <td class="xl71">{{ area.sendNum }}</td>
          <td class="xl71">{{ area.inceptNum }}</td>
          <td class="xl71">{{ area.testNum }}</td>
          <td class="xl83" x:fmla="=D13/C13">{{ area.collectPercentage }}%</td>
          <td class="xl84" x:fmla="=H13/E13">{{ area.inceptPercentage }}%</td>
          <td class="xl85" x:fmla="=I13/E13">{{ area.testPercentage }}%</td>
        </tr>
        <tr height="27.80" style="height: 27.8pt;font-weight: bold;">
          <td height="27.80" style="height: 27.8pt"></td>
          <td class="xl73" style="font-weight: bold;">合计</td>
          <td class="xl71" style="font-weight: bold;">{{ lastStatistics.people }}</td>
          <td class="xl72" style="font-weight: bold;">{{ lastStatistics.collectNum }}</td>
          <td class="xl73" style="font-weight: bold;">{{ lastStatistics.collectNum }}</td>
          <td class="xl79" style="font-weight: bold;"></td>
          <td class="xl80" style="font-weight: bold;">{{ lastStatistics.sendNum }}</td>
          <td class="xl73" style="font-weight: bold;">{{ lastStatistics.inceptNum }}</td>
          <td class="xl71" style="font-weight: bold;">{{ lastStatistics.testNum }}</td>
          <td class="xl83" style="font-weight: bold;">{{ lastStatistics.collectPercentage }}%</td>
          <td class="xl84" style="font-weight: bold;">{{ lastStatistics.inceptPercentage }}%</td>
          <td class="xl85" style="font-weight: bold;">{{ lastStatistics.testPercentage }}%</td>
        </tr>
         <tr height="27.80" style="height: 27.8pt;font-weight: bold;">
          <td height="27.80" style="height: 27.8pt"></td>
          <td class="xl73" style="font-weight: bold;">上轮同期合计</td>
          <td class="xl71" style="font-weight: bold;"></td>
          <td class="xl72" style="font-weight: bold;"></td>
          <td class="xl73" style="font-weight: bold;"></td>
          <td class="xl79" style="font-weight: bold;"></td>
          <td class="xl80" style="font-weight: bold;"></td>
          <td class="xl73" style="font-weight: bold;"></td>
          <td class="xl71" style="font-weight: bold;"></td>
          <td class="xl83" style="font-weight: bold;"></td>
          <td class="xl84" style="font-weight: bold;"></td>
          <td class="xl85" style="font-weight: bold;"></td>
        </tr>
        <tr height="76" style="height: 76pt">
          <td height="76" style="height: 76pt"></td>
          <td class="xl65"></td>
          <td
            class="xl74"
            colspan="7"
            style="border-right: none; border-bottom: none"
            x:str
          >
            说明：采样率=采样总数/目标人数<br /><span
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            >实验室接收率=检测机构接收数/采样数总数<br /><span
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
            >样本检测率=检测出结果数/采样数总数
          </td>
          <td class="xl65" colspan="3"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import dayjs from 'dayjs';

  //must keep member order of this array
  const areasName = [
    "和林格尔县",
    "呼和浩特经济技术开发区",
    "回民区",
    //"清水河县",
    "赛罕区",
    "土默特左旗",
    //"托克托县",
    "武川县",
    "新城区",
    "玉泉区"
  ];

  const areaPeople = {
    "和林格尔县": 145100,
    "呼和浩特经济技术开发区": 17800,
    "回民区": 356000,
    "清水河县": 74100,
    "赛罕区": 766500,
    "土默特左旗": 355000,
    "托克托县": 153600,
    "武川县": 89400,
    "新城区": 575600,
    "玉泉区": 465300,
  };

  const route = useRoute();
  
  const { data }  = await useFetch("/api/data?day=" + route.params.dayid + '&hour=' + route.params.hourid);
  const tdata = JSON.parse(data.value);

  const day = dayjs(tdata["/arcpscreen/api/wartimes/screen/plus/getCityRelatedDayNum"].dateTime);

  // data for last time
  const lastData = createData(tdata);
  const lastStatistics = getStatistics();

  function createData(data){
    let areas = [];

    areasName.map((name) => {
      let area = {};
      area.name = name;
      area.people = areaPeople[name];

      let a = data["/arcpscreen/api/wartimes/screen/plus/getDayAreaCollectNum"];
      a.map((area1) => {
        if(area1.area == name){
          area.collectNum = area1.collectNum;
          area.sendNum = area1.sendNum;
          area.inceptNum = area1.inceptNum;
          area.testNum = area1.testNum;
          area.collectPercentage = getPercentage(area.collectNum, area.people);
          area.inceptPercentage = getPercentage(area.inceptNum, area.people);
          area.testPercentage = getPercentage(area.testNum, area.people);
        }
      });
      areas.push(area);
    });
    return areas;
    //return sortWithCollectRatio(areas);
  }

  function getPercentage(some, people){
    return parseFloat(((some / people) * 100).toFixed(2));
  }

  function sortWithCollectRatio(areas){
    return areas.sort(function(a, b){return b.collectPercentage - a.collectPercentage});
  }

  function getStatistics() {
    let st = {};

    st.people = lastData.reduce((p, c) => p + c.people, 0);
    st.collectNum = lastData.reduce((p, c) => p + c.collectNum, 0);
    st.sendNum = lastData.reduce((p, c) => p + c.sendNum, 0);
    st.inceptNum = lastData.reduce((p, c) => p + c.inceptNum, 0);
    st.testNum = lastData.reduce((p, c) => p + c.testNum, 0);
    st.collectPercentage = (lastData.reduce((p, c) => p + c.collectPercentage, 0)/lastData.length).toFixed(2);
    st.inceptPercentage = (lastData.reduce((p, c) => p + c.inceptPercentage, 0)/lastData.length).toFixed(2);
    st.testPercentage = (lastData.reduce((p, c) => p + c.testPercentage, 0)/lastData.length).toFixed(2);

    return st;
  }
  
</script>

<style scoped>
@page {
  margin: 0.75in 0.7in 0.75in 0.31in;
  mso-header-margin: 0.3in;
  mso-footer-margin: 0.3in;
  mso-page-orientation: landscape;
}

.font1 {
  color: #000000;
  font-size: 11pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "微软雅黑";
}

.font2 {
  color: #000000;
  font-size: 14pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: "微软雅黑";
}

td {
  padding-top: 1px;
  padding-right: 1px;
  padding-left: 1px;
  text-align: general;
  vertical-align: bottom;
  white-space: nowrap;
  color: #000000;
  font-size: 11pt;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-family: Calibri;
}

.xl65 {
  font-family: 微软雅黑, sans-serif;
}

.xl66 {
  text-align: center;
  vertical-align: middle;
  font-size: 14pt;
  font-family: 微软雅黑, sans-serif;

  border-left: none;
  border-top: none;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
}

.xl67 {
  text-align: center;
  vertical-align: middle;
  font-size: 14pt;
  font-family: 微软雅黑, sans-serif;

  border-left: 0.5pt solid windowtext;
  border-top: none;
  border-right: 0.5pt solid windowtext;
  border-bottom: 0.5pt solid windowtext;
}

.xl68 {
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  font-family: 微软雅黑, sans-serif;

  border-left: 0.5pt solid windowtext;
  border-top: none;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
}

.xl69 {
  text-align: center;
  vertical-align: middle;
  font-family: 微软雅黑, sans-serif;

  border-left: 2pt double windowtext;
  border-top: none;
  border-right: 0.5pt solid windowtext;
  border-bottom: 0.5pt solid windowtext;
}

.xl71 {
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  font-family: 微软雅黑, sans-serif;

  border-left: 0.5pt solid windowtext;
  border-top: 0.5pt solid windowtext;
  border-right: none;
  border-bottom: 0.5pt solid windowtext;
}

.xl72 {
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  font-family: 微软雅黑, sans-serif;

  border-left: 2pt double windowtext;
  border-top: 0.5pt solid windowtext;
  border-right: 0.5pt solid windowtext;
  border-bottom: 0.5pt solid windowtext;
}

.xl73 {
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  font-family: 微软雅黑, sans-serif;

  border: 0.5pt solid windowtext;
}

.xl74 {
  text-align: left;
  white-space: normal;
  font-family: 微软雅黑, sans-serif;
}

.xl77 {
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  font-family: 微软雅黑, sans-serif;

  border-left: none;
  border-top: none;
  border-right: 0.5pt solid windowtext;
  border-bottom: 0.5pt solid windowtext;
}

.xl78 {
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  font-family: 微软雅黑, sans-serif;

  border-left: 0.5pt solid windowtext;
  border-top: none;
  border-right: 0.5pt solid windowtext;
  border-bottom: 0.5pt solid windowtext;
}

.xl79 {
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  font-family: 微软雅黑, sans-serif;

  border-left: 0.5pt solid windowtext;
  border-top: 0.5pt solid windowtext;
  border-right: 2pt double windowtext;
  border-bottom: 0.5pt solid windowtext;
}

.xl80 {
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  font-family: 微软雅黑, sans-serif;

  border-left: none;
  border-top: 0.5pt solid windowtext;
  border-right: 0.5pt solid windowtext;
  border-bottom: 0.5pt solid windowtext;
}

.xl81 {
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  font-family: 微软雅黑, sans-serif;

  border-left: 2pt double windowtext;
  border-top: none;
  border-right: 0.5pt solid windowtext;
  border-bottom: 0.5pt solid windowtext;
}

.xl82 {
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  font-family: 微软雅黑, sans-serif;

  border-left: 0.5pt solid windowtext;
  border-top: none;
  border-right: 2pt double windowtext;
  border-bottom: 0.5pt solid windowtext;
}

.xl83 {
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  font-family: 微软雅黑, sans-serif;

  border-left: 2pt double windowtext;
  border-top: 0.5pt solid windowtext;
  border-right: 0.5pt solid windowtext;
  border-bottom: 0.5pt solid windowtext;
}

.xl84 {
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  font-family: 微软雅黑, sans-serif;

  border: 0.5pt solid windowtext;
}

.xl85 {
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  font-family: 微软雅黑, sans-serif;

  border-left: 0.5pt solid windowtext;
  border-top: 0.5pt solid windowtext;
  border-right: 2pt double windowtext;
  border-bottom: 0.5pt solid windowtext;
}
</style>