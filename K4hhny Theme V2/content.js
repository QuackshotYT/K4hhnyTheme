(function () {
    const addScript = () => {
        document.title="K4hhny Theme"
        document.head.innerHTML += `<style>

:root {
	--select-border: #777;
	--select-focus: blue;
	--select-arrow: var(--select-border);
    --ss-transparent: #00000000;
	--ss-black: #000;
	--ss-adblocker-text: #003449;
	--ss-white: #FFFFFF;
	--ss-offwhite: #FFF3E4;
	--ss-yellow0:#F7FFC1;
	--ss-yellow: #FAF179;
	--ss-yolk0: #f1c59a;
	--ss-yolk: #F79520;
	--ss-yolk2: #d97611;
	--ss-red0: #e29092;
	--ss-red: #d15354;
	--ss-red2: #801919;
	--ss-egg-org: #EE2524;
	--ss-red-bright: #EF3C39;
	--ss-pink: #EC008C;
	--ss-pink1: #b9006e;
	--ss-pink-light: #ff3aaf;
	--ss-pink-dark: #a7098c;
	--ss-brown: #924e0c;
	--ss-blue00: #abe3f6;
	--ss-blue0: #c8edf8;
	--ss-blue1: #95E2FE;
	--ss-blue2: #5EBBD9;
	--ss-blue3: #0B93BD;
	--ss-blue4: #0E7697;
	--ss-blue5: #0C576F;
	--ss-blue6: #8dd3ea;
	--ss-blue7: #00c0ff;
	--ss-blue8: #1192BC;
	--ss-green0: #87ddbb;
	--ss-green1: #13BA65;
	--ss-green2: #046306;
	--ss-green-login: #13ba65;
	--ss-orange1: #F79520;
	--ss-vip-blue: #0E7FFF;
	--ss-vip-pink: #FF5AF5;
	--ss-vip-brown: #9F5600;
	--ss-vip-yellow: #FFFC00;
	--ss-vip-red: #EE2B2D;
	--ss-vip-purple: #40008F;
	--ss-vip-gold: linear-gradient(to right, #D1A943, #CFCDAF, #CC8630, #D1AA44, #CC8630);
	--ss-vip-store-bg: linear-gradient(to right bottom, #fffbee, #fff3ca, #ffeaa5, #ffe180, #ffd759, #f4c843, #eab82a, #dfa900, #c79200, #ae7d00, #966800, #7e5400);
	--ss-gold: #FED838;
	--ss-clear: rgba(255, 255, 255, 0);
	--ss-blue2clear: rgba(94, 186, 217, 0);
	--ss-blue2alpha7: rgba(94, 186, 217, .7);
	--ss-white-60: rgba(255,255,255,.6);
	--ss-white-90: rgba(255,255,255,.9);
	--ss-twitch: #6441a5;
    --twitch-color: #6441a5;
	--twitch-yellow: #FFFE61;
	--twitch-pink: #F00DC9;
	--twitch-dk-pink: #c00aa0;
	--twitch-lt-purple: #9146FF;
	--twitch-dk-purple: #40008F;
	--twitch-xtr-dk-purple: #1e0043;
	--egg-pack-small-bg: linear-gradient(146deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(0,249,255,1) 50%);
	--egg-pack-md-bg: linear-gradient(146deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(216,158,252,1) 50%);
	--egg-pack-lg-bg: linear-gradient(146deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(252,174,201,1) 50%);
	--bundle-color: #FF57DD;
	--bundle-text-color: #7A23C6;
	--ss-orange: #F7941D;
	--ss-brown-2: #894B00;
	--ss-vip: #FFF000;
	--ss-red-btn-fill: #E81616;
	--ss-red-btn-outline: #881A1A;
	--ss-limited: #ffb3e8;
	--ss-limited-txt: #ff1bba;
	--ss-premium: #87ec4a;
	--ss-premium-txt: #204908;
	--ss-vip-txt: #676000;
	--ss-darkoverlay: rgba(0, 0, 0, 0.6);
	--ss-darkoverlay2: rgba(0, 0, 0, 0.2);
	--ss-lightoverlay: url(https://media.discordapp.net/attachments/1127787817238528183/1163769799390806026/image.png?ex=6540c815&is=652e5315&hm=6a3bb975cd963796247f91bddec69df95285a639e0bfe5153e89b107553d3f48&=&width=1986&height=1117);
	--ss-lightbackground: linear-gradient(var(--ss-blue1), var(--ss-blue2) );
	--ss-popupbackground: url(https://media.discordapp.net/attachments/1127787817238528183/1163769799390806026/image.png?ex=6540c815&is=652e5315&hm=6a3bb975cd963796247f91bddec69df95285a639e0bfe5153e89b107553d3f48&=&width=1986&height=1117);
	--ss-blueblend1: linear-gradient(#349ec1, #5fbad8);
	--ss-scrollmask1: linear-gradient(var(--ss-blue2clear), var(--ss-blue00));
	--ss-scrollmask2: linear-gradient(rgba(56, 158, 192, 0), #389EC0);
	--ss-fieldbg: linear-gradient(#91CADB, #ffffff, #ffffff, #ffffff, #ffffff);
	--ss-nugSecs: 3600s;
	--ss-me-player-bg: url(https://media.discordapp.net/attachments/1127787817238528183/1163769799390806026/image.png?ex=6540c815&is=652e5315&hm=6a3bb975cd963796247f91bddec69df95285a639e0bfe5153e89b107553d3f48&=&width=1986&height=1117);
	--ss-team-blue-light: rgb(96, 192, 224);
	--ss-team-blue-light-trans: rgb(96, 192, 224, 0.8);
	--ss-team-blue-dark: rgb(48, 128, 160);
	--ss-team-blue-dark-trans: rgb(48, 96, 160, 0.8);
	--ss-team-red-light: rgb(255, 64, 48);
	--ss-team-red-light-trans: rgb(255, 64, 48, 0.8);
	--ss-team-red-dark: rgb(160, 32, 24);
	--ss-team-red-dark-trans: rgb(160, 32, 24, 0.8);
	--ss-big-message-border-color: rgb(0, 0, 0);
	--ss-header-height: 10em;
	--ss-footer-height: 4em;
	--ss-main-width: 90em;
	--ss-min-width: 68em;
	--ss-space-xxxxl: calc(var(--ss-space-lg)*4);
	--ss-space-xxl: 2.3em;
	--ss-space-xl: 1.5em;
	--ss-space-lg: 1em;
	--ss-space-md: calc(var(--ss-space-lg)/2);
	--ss-space-sm: calc(var(--ss-space-md)/1.5);
	--ss-space-xs: calc(var(--ss-space-sm)/2);
	--ss-space-micro: calc(var(--ss-space-xs)/2);
	--border-radius: 0.4em;
	--ss-border-radius-sm: 0.2em;
	--ss-common-border-width: .2em;
	/* Element dimensions */
	--ss-logo-width: calc(var(--ss-space-lg)*14);
	--ss-menu-width: calc(var(--ss-logo-width) - var(--ss-space-lg));
	--ss-main-sidebar-width: 16em;
	--ss-sidebar-width: calc(var(--ss-space-lg)*18.2);
	--ss-aside-panel-width: 20em;
	--ss-item-mask-height: calc(var(--ss-space-lg)*4);
	--ss-item-mask-width: calc(var(--ss-aside-panel-width) - 1.3em);
	--ss-item-box: calc(var(--ss-space-lg)*5.5);
	--ss-account-panel-height: calc(var(--ss-space-lg)*4);
	--ss-chat-wrapper-width: 14.5em;
	--ss--chat-height: 14.5em;
	--ss-media-social-width: 17.7em;
	--paused-ui-scale: .6;
	--paused-ui-vip-scale: .9;
	--chw-bubble-width: 9em;
	--chw-bubble-height: 3.3em;
	--home-screen-r-padding: .68em;
	/* shadows */
	--ss-box-shadow-1:  .16em .16em 0 rgba(11, 147, 189,.5);
	--ss-box-shadow-2: .15em .15em 0 rgba(11, 147, 189,.9);
	--ss-box-shadow-3: .15em .15em 0 rgba(217,118,17,.9);
    --ss-text-shadow-1: .1em .1em 0 rgba(11, 147, 189,.8);
	--ss-shadow: rgba(0,0,0,.4);
	--ss-blueshadow: #0a577187;
	--ss-btn-common-txt-shadow: .1em .1em 0 rgb(0 0 0 / 30%);
	--ss-btn-common-txt-shadow-blur: .1em .1em .5em rgb(0 0 0 / 30%);
	--ss-shadow-filter: drop-shadow(var(--ss-btn-common-txt-shadow));
	/* button bevel */
	--ss-btn-light-bevel: inset 0 .15em .2em;
	--ss-btn-dark-bevel: inset -.1em -.15em .1em;
	--ss-border-blue5: var(--ss-common-border-width) solid var(--ss-blue5);
	--ss-type-icon-size: 2.8em;
	--ss-equip-icon-size: 4em;
	--ss-media-stats-height: 30.5em;
	--gauge-timer-sec: 2deg;
	--gauge-value-start: 0deg;
	--gauge-value-end: 180deg;
	--gauge-value: 180deg;
	--gauge-shadow-blur: 2em;
}

#best_streak_container h1 {
    margin: 0; padding: 0;
    display: inline;

    text-shadow: var(--ss-space-micro) var(--ss-space-micro) var(--ss-shadow);

    font-family: 'Nunito', sans-serif !important;
    font-size: 2.5em !important;
    color: var(--ss-white) !important;
    font-weight: bold !important;
    text-transform: lowercase;

    padding-left: 1.5em;
    padding-top: 0em;

    background-image: url('https://media.discordapp.net/attachments/1127817990986027068/1163760051157205002/follow.png?ex=6540bf01&is=652e4a01&hm=263166555d7571c9ea0c57c2544130a3741ed939d1fa8755c9b34f66554e711f&=&width=1986&height=1117');
    background-position: left center;
    background-size: contain;
    background-repeat: no-repeat;
}

#maskmiddle {
	background: url('https://media.discordapp.net/attachments/1127817990986027068/1163780028820115476/imakms.png?ex=6540d19c&is=652e5c9c&hm=c9479e9a34e1f0d9c7b49f17863063cd75a1a544677c16084991842a08968048&=&width=1117&height=1117') center center no-repeat;
	background-size: contain;
    width: 100vh;
	height: 100vh;
}
#maskleft, #maskright {
	background: black;
	flex: 1;
}
#healthContainer {
	position: absolute;
	left: 50%; bottom: 1em;
	transform: translateX(-50%);
	display: inline-block;
	width: 6em; height: 6em;
	background: var(--ss-blueshadow);
	border-radius: 50%;
	text-align: center;
}

#health {
}

#healthHp {
	font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: var(--ss-white);
    font-size: 1.2em;
    transform: translateY(-3.45em);
}

.healthBar {
	transform-origin: center;
	transform: rotate(90deg);
	fill: transparent;
	stroke: #edeef7;
	stroke-width: 1em;
	stroke-dasharray: 14.4513em;
	transition: all 0.3s linear(0 0%, 0.97 18.4%, 1.05 100.27%);
}

.healthYolk {
	fill: #0e1287;
}

.healthSvg {
	width: 100%; height: 100%;
}


.crosshair {
	position: absolute;
	transform-origin: 50% top;
	top: 50%;
	border: solid 0.05em #0e1287;
	height: 0.8em;
	margin-bottom: 0.12em;
	opacity: 0.7;
}

.crosshair.normal {
	left: calc(50% - 0.15em);
	background: #0e1287;
	width: 0.3em;
}

.crosshair.powerful {
	left: calc(50% - 0.25em);
	background: #ff0000;
	width: 0.5em;
}
#reticleDot {
	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
	background: #00138c;
	border: solid 0.01em #ffffff;
	width: 0.4em;
	height: 0.4em;
	opacity: 0.7;
}

.shotReticle.fill.normal {
    border-color: #0e1287;
    border-left: solid transparent;
    border-right: solid transparent;
    border-width: 0.18em;
    padding: 0.18em;
}

.shotReticle.fill.powerful {
	border-color: #ff0000;
	border-left: solid transparent;
	border-right: solid transparent;
	border-width: 0.3em;
	padding: 0.1em;
}

.shotReticle.border.normal {
	border-color: #0e1287;
	border-left: solid transparent;
	border-right: solid transparent;
	border-width: 0.2em;
}

.shotReticle.border.powerful {
	border-color: #ea00ff;
	border-left: solid transparent;
	border-right: solid transparent;
	border-width: 0.2em;
}
#killBox h3{
	display:none;
}

#killBox::before{
font-size: 1em;
font-weight: 900;
content: 'YOU OBLITERATED'!important;
color: #0e1287;
}
#KILL_STREAK::before{
  display: normal !important;
}
#deathBox h3{
display:none;
}

#deathBox::before{
font-size: 1em;
font-weight: 900;
content: 'YOU WERE OBLITERATED BY'!important;
color: #0e1287;

}
#grenadeThrowContainer {
	position: absolute;
	display: flex;
	visibility: hidden;
	align-items: flex-end;
	top: 50%;
	left: 50%;
	transform: translate(-6em, -3em);
	width: 1em;
	height: 6em;
	background: #9da7bd;
	border-radius: 0.3em;
	padding: 0.25em;
}

#grenadeThrow {
	width: 100%;
	height: 50%;
	border-radius: 0.05em;
	background: linear-gradient(0deg, rgba(253, 252, 255, 1), rgba(255, 254, 250, 1), rgba(206, 207, 245, 1), rgba(154, 156, 217, 1), rgba(99, 102, 214, 1), rgba(69, 73, 209, 1), rgba(42, 38, 163, 1), rgba(33, 37, 163, 1), rgba(14, 18, 135, 1));
}

</style>`
    }
    document.body ? addScript() : document.addEventListener("DOMContentLoaded", e => addScript());
})();