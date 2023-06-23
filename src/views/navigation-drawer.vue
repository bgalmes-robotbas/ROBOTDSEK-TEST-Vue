<template>
  <div class="navigation-drawer-container">
    <div class="navigation-drawer-navigation-drawer">
      <div class="navigation-drawer-sectionheader2">
        <div class="navigation-drawer-left">
          <span class="navigation-drawer-text M3titlesmall">
            <span>Section Header</span>
          </span>
        </div>
      </div>
      <div class="navigation-drawer-navitem5">
        <div class="navigation-drawer-statelayer">
          <img
            alt="IconI532"
            src="/external/iconi532-oe9b.svg"
            class="navigation-drawer-icon"
          />
          <span class="navigation-drawer-text02 M3labellarge">
            <span>Label</span>
          </span>
        </div>
      </div>
      <div class="navigation-drawer-navitem6">
        <div class="navigation-drawer-statelayer1">
          <img
            alt="IconI532"
            src="/external/iconi532-nooh.svg"
            class="navigation-drawer-icon1"
          />
          <span class="navigation-drawer-text04 M3labellarge">
            <span>Label</span>
          </span>
        </div>
      </div>
      <div class="navigation-drawer-navitem7">
        <div class="navigation-drawer-statelayer2">
          <img
            alt="IconI532"
            src="/external/iconi532-b7hg.svg"
            class="navigation-drawer-icon2"
          />
          <span class="navigation-drawer-text06 M3labellarge">
            <span>Label</span>
          </span>
        </div>
      </div>
      <div class="navigation-drawer-divider2">
        <img
          alt="DividerI532"
          src="/external/divideri532-6szc.svg"
          class="navigation-drawer-divider"
        />
      </div>
      <div class="navigation-drawer-sectionheader3">
        <div class="navigation-drawer-left1">
          <span class="navigation-drawer-text08 M3titlesmall">
            <span>Section Header</span>
          </span>
        </div>
      </div>
      <div class="navigation-drawer-navitem8">
        <div class="navigation-drawer-statelayer3">
          <img
            alt="IconI532"
            src="/external/iconi532-z0sl.svg"
            class="navigation-drawer-icon3"
          />
          <span class="navigation-drawer-text10 M3labellarge">
            <span>Label</span>
          </span>
        </div>
      </div>
      <div class="navigation-drawer-navitem9">
        <div class="navigation-drawer-statelayer4">
          <div class="navigation-drawer-icon4">
            <img
              alt="iconI532"
              src="/external/iconi532-jrvj.svg"
              class="navigation-drawer-icon5"
            />
          </div>
          <span class="navigation-drawer-text12 M3labellarge">
            <span>Label</span>
          </span>
        </div>
      </div>
      <div class="navigation-drawer-navitem10">
        <div class="navigation-drawer-statelayer5">
          <span class="navigation-drawer-text14 M3labellarge">
            <span>Label</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  metaInfo: {
    title: 'exported project',
  },
}
</script>

<style scoped>
.navigation-drawer-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.navigation-drawer-navigation-drawer {
  width: 369px;
  height: auto;
  display: flex;
  padding: 12px;
  overflow: hidden;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 16px;
  flex-direction: column;
  background-color: var(--dl-color-m3_sys_light-inverseonsurface);
}
.navigation-drawer-sectionheader2 {
  gap: 10px;
  display: flex;
  padding: 18px 16px;
  overflow: hidden;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
}
.navigation-drawer-left {
  gap: 12px;
  display: flex;
  align-items: center;
}
.navigation-drawer-text {
  color: var(--dl-color-m3_sys_light-onsurfacevariant);
  height: auto;
  text-align: left;
  line-height: 20px;
}
.navigation-drawer-navitem5 {
  gap: 12px;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
}
.navigation-drawer-statelayer {
  gap: 12px;
  display: flex;
  padding: 16px 24px 16px 16px;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
}
.navigation-drawer-icon {
  width: 24px;
  height: 24px;
}
.navigation-drawer-text02 {
  color: var(--dl-color-m3_sys_light-onsurfacevariant);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 20px;
}
.navigation-drawer-navitem6 {
  gap: 12px;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
}
.navigation-drawer-statelayer1 {
  gap: 12px;
  display: flex;
  padding: 16px 24px 16px 16px;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
}
.navigation-drawer-icon1 {
  width: 24px;
  height: 24px;
}
.navigation-drawer-text04 {
  color: var(--dl-color-m3_sys_light-onsurfacevariant);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 20px;
}
.navigation-drawer-navitem7 {
  gap: 12px;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
}
.navigation-drawer-statelayer2 {
  gap: 12px;
  display: flex;
  padding: 16px 24px 16px 16px;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
}
.navigation-drawer-icon2 {
  width: 24px;
  height: 24px;
}
.navigation-drawer-text06 {
  color: var(--dl-color-m3_sys_light-onsurfacevariant);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 20px;
}
.navigation-drawer-divider2 {
  display: flex;
  padding: 0 16px;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.navigation-drawer-divider {
  width: 313px;
  height: 1px;
  align-self: stretch;
}
.navigation-drawer-sectionheader3 {
  gap: 10px;
  display: flex;
  padding: 18px 16px;
  overflow: hidden;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
}
.navigation-drawer-left1 {
  gap: 12px;
  display: flex;
  align-items: center;
}
.navigation-drawer-text08 {
  color: var(--dl-color-m3_sys_light-onsurfacevariant);
  height: auto;
  text-align: left;
  line-height: 20px;
}
.navigation-drawer-navitem8 {
  gap: 12px;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
}
.navigation-drawer-statelayer3 {
  gap: 12px;
  display: flex;
  padding: 16px 24px 16px 16px;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
}
.navigation-drawer-icon3 {
  width: 24px;
  height: 24px;
}
.navigation-drawer-text10 {
  color: var(--dl-color-m3_sys_light-onsurfacevariant);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 20px;
}
.navigation-drawer-navitem9 {
  gap: 12px;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
}
.navigation-drawer-statelayer4 {
  gap: 12px;
  display: flex;
  padding: 16px 24px 16px 16px;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
}
.navigation-drawer-icon4 {
  width: 24px;
  height: 24px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.navigation-drawer-icon5 {
  top: 4px;
  left: 4px;
  width: 16px;
  height: 16px;
  position: absolute;
}
.navigation-drawer-text12 {
  color: var(--dl-color-m3_sys_light-onsurfacevariant);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 20px;
}
.navigation-drawer-navitem10 {
  gap: 12px;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
}
.navigation-drawer-statelayer5 {
  gap: 12px;
  display: flex;
  padding: 16px 24px 16px 16px;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
}
.navigation-drawer-text14 {
  color: var(--dl-color-m3_sys_light-onsurfacevariant);
  height: auto;
  flex-grow: 1;
  text-align: left;
  line-height: 20px;
}
</style>
