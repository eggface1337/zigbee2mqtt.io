"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[45609],{92862:(e,o,d)=>{d.r(o),d.d(o,{comp:()=>c,data:()=>i});var l=d(24691);const t={},c=(0,d(88242).A)(t,[["render",function(e,o){const d=(0,l.g2)("RouteLink");return(0,l.uX)(),(0,l.CE)("div",null,[o[8]||(o[8]=(0,l.Lk)("h1",{id:"siglis-zfp-1a-ch",tabindex:"-1"},[(0,l.Lk)("a",{class:"header-anchor",href:"#siglis-zfp-1a-ch"},[(0,l.Lk)("span",null,"Siglis ZFP-1A-CH")])],-1)),(0,l.Lk)("table",null,[o[6]||(o[6]=(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th"),(0,l.Lk)("th")])],-1)),(0,l.Lk)("tbody",null,[o[2]||(o[2]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Model"),(0,l.Lk)("td",null,"ZFP-1A-CH")],-1)),(0,l.Lk)("tr",null,[o[1]||(o[1]=(0,l.Lk)("td",null,"Vendor",-1)),(0,l.Lk)("td",null,[(0,l.bF)(d,{to:"/supported-devices/#v=Siglis"},{default:(0,l.k6)((()=>o[0]||(o[0]=[(0,l.eW)("Siglis")]))),_:1})])]),o[3]||(o[3]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Description"),(0,l.Lk)("td",null,"zigfred plus smart in-wall switch")],-1)),o[4]||(o[4]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Exposes"),(0,l.Lk)("td",null,"action, linkquality")],-1)),o[5]||(o[5]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Picture"),(0,l.Lk)("td",null,[(0,l.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZFP-1A-CH.png",alt:"Siglis ZFP-1A-CH"})])],-1))])]),o[9]||(o[9]=(0,l.Lk)("h2",{id:"options",tabindex:"-1"},[(0,l.Lk)("a",{class:"header-anchor",href:"#options"},[(0,l.Lk)("span",null,"Options")])],-1)),(0,l.Lk)("p",null,[(0,l.Lk)("em",null,[(0,l.bF)(d,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,l.k6)((()=>o[7]||(o[7]=[(0,l.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,l.Fv)('<ul><li><p><code>front_surface_enabled</code>: Front Surface LED enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_1_enabled</code>: Dimmer 1 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_1_dimming_enabled</code>: Dimmer 1 dimmable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_2_enabled</code>: Dimmer 2 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_2_dimming_enabled</code>: Dimmer 2 dimmable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_3_enabled</code>: Dimmer 3 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_3_dimming_enabled</code>: Dimmer 3 dimmable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_4_enabled</code>: Dimmer 4 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_4_dimming_enabled</code>: Dimmer 4 dimmable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>cover_1_enabled</code>: Cover 1 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>cover_1_tilt_enabled</code>: Cover 1 tiltable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>cover_2_enabled</code>: Cover 2 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>cover_2_tilt_enabled</code>: Cover 2 tiltable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>color_sync</code>: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>button_1_single</code>, <code>button_1_double</code>, <code>button_1_hold</code>, <code>button_1_release</code>, <code>button_2_single</code>, <code>button_2_double</code>, <code>button_2_hold</code>, <code>button_2_release</code>, <code>button_3_single</code>, <code>button_3_double</code>, <code>button_3_hold</code>, <code>button_3_release</code>, <code>button_4_single</code>, <code>button_4_double</code>, <code>button_4_hold</code>, <code>button_4_release</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6))])}]]),i=JSON.parse('{"path":"/devices/ZFP-1A-CH.html","title":"Siglis ZFP-1A-CH control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Siglis ZFP-1A-CH control via MQTT","description":"Integrate your Siglis ZFP-1A-CH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-06-01T15:08:55.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1731007698000},"filePathRelative":"devices/ZFP-1A-CH.md"}')}}]);