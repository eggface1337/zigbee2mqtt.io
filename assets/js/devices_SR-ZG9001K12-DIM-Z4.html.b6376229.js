"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[47141],{61432:(e,n,t)=>{t.r(n),t.d(n,{comp:()=>i,data:()=>l});var a=t(24691);const s={},i=(0,t(88242).A)(s,[["render",function(e,n){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[n[9]||(n[9]=(0,a.Lk)("h1",{id:"sunricher-sr-zg9001k12-dim-z4",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#sunricher-sr-zg9001k12-dim-z4"},[(0,a.Lk)("span",null,"Sunricher SR-ZG9001K12-DIM-Z4")])],-1)),(0,a.Lk)("table",null,[n[7]||(n[7]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[n[2]||(n[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"SR-ZG9001K12-DIM-Z4")],-1)),(0,a.Lk)("tr",null,[n[1]||(n[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Sunricher"},{default:(0,a.k6)((()=>n[0]||(n[0]=[(0,a.eW)("Sunricher")]))),_:1})])]),n[3]||(n[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"4 zone remote and dimmer")],-1)),n[4]||(n[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"battery, action, linkquality")],-1)),n[5]||(n[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SR-ZG9001K12-DIM-Z4.png",alt:"Sunricher SR-ZG9001K12-DIM-Z4"})])],-1)),n[6]||(n[6]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"White-label"),(0,a.Lk)("td",null,"RGB Genie ZGRC-KEY-013")],-1))])]),n[10]||(n[10]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press and hold the All On button on the Remote until the Status LED turns on. Then immediately press the All Off button. The Status LED will blink 5 times quickly to indicate a successful pairing.</p><h3 id="resetting" tabindex="-1"><a class="header-anchor" href="#resetting"><span>Resetting</span></a></h3><p>Press and hold the All On button on the Remote until the Status LED turns on. Then immediately press 5 times the All On button. The Status LED will blink 3 times to indicate successful reset.</p><h3 id="deprecated-click-event" tabindex="-1"><a class="header-anchor" href="#deprecated-click-event"><span>Deprecated click event</span></a></h3><p>By default this device exposes a deprecated <code>click</code> event. It&#39;s recommended to use the <code>action</code> event instead.</p><p>To disable the <code>click</code> event, set <code>legacy: false</code> for this device in <code>configuration.yaml</code>. Example:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">devices</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_device</span>\n<span class="line">    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',10)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>n[8]||(n[8]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),n[11]||(n[11]=(0,a.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>on</code>, <code>off</code>, <code>recall_*</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10))])}]]),l=JSON.parse('{"path":"/devices/SR-ZG9001K12-DIM-Z4.html","title":"Sunricher SR-ZG9001K12-DIM-Z4 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sunricher SR-ZG9001K12-DIM-Z4 control via MQTT","description":"Integrate your Sunricher SR-ZG9001K12-DIM-Z4 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-09-01T18:11:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Resetting","slug":"resetting","link":"#resetting","children":[]},{"level":3,"title":"Deprecated click event","slug":"deprecated-click-event","link":"#deprecated-click-event","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1731007698000},"filePathRelative":"devices/SR-ZG9001K12-DIM-Z4.md"}')}}]);