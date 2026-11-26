<template>
  <g>
    <ellipse cy="8" rx="92" ry="36" fill="#4B3430" opacity=".1" />
    <IsoBox :a="1.1" :b="0.7" :h="7" :gx="-0.8" :gy="-0.2" :lines="1" top="#8B6359" left="#6F4D44" right="#563932" />
    <IsoBox :a="0.8" :b="0.5" :h="6" :gx="-0.55" :gy="-0.05" :z="7" :lines="1" top="#96695E" left="#7A564D" right="#5F4139" />
    <IsoCyl axis="y" :len="0.95" :r="11" :gx="0.4" :gy="-0.55" :z="11" body="#7A564D" dark="#4B3430" :rings="[[1,'#8B6359'],[0.7,'#3F2A26']]" />
    <g transform="translate(-26 -26)"><g class="crawl"><ellipse rx="4" ry="2.6" fill="#3F2A26" /><circle cx="4" cy="0" r="1.8" fill="#3F2A26" /></g></g>
  </g>
</template>
