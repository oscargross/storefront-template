(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{238:function(e,t,s){var i=s(242);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,s(173).default)("6cc07505",i,!0,{})},239:function(e,t,s){"use strict";var i={name:"ABackdrop",props:{isVisible:{type:Boolean,default:!0},zIndexOnShow:{type:Number,default:1080},transitionMs:{type:Number,default:150}},data:()=>({opacity:0,zIndex:null,top:null}),computed:{style(){const{top:e,zIndex:t,transitionMs:s,opacity:i}=this;return{top:e,transition:`opacity ${s}ms linear`,opacity:i,zIndex:t}}},methods:{hide(){this.$emit("update:is-visible",!1),this.$emit("hide")},lockBodyScroll(){document.body.style.maxWidth=`${document.body.offsetWidth}px`,document.body.style.overflow="hidden"}},watch:{isVisible(e){e?(this.opacity=null,this.lockBodyScroll()):(this.opacity=0,document.body.style.overflow=document.body.style.maxWidth=null)},opacity(e){0===e?setTimeout((()=>{this.top=this.zIndex=null}),this.transitionMs):(this.zIndex=this.zIndexOnShow,this.top=0)}},mounted(){this.isVisible&&(setTimeout((()=>{this.opacity=null}),this.transitionMs),this.lockBodyScroll())}},a=(s(241),s(51)),r=Object(a.a)(i,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"backdrop",style:e.style,on:{click:e.hide}})}),[],!1,null,null,null);t.a=r.exports},241:function(e,t,s){"use strict";s(238)},242:function(e,t,s){(t=s(172)(!1)).push([e.i,".backdrop{position:fixed;top:-100vh;left:0;width:100vw;height:100vh;background-color:var(--dark);opacity:.65;cursor:pointer;z-index:-100}",""]),e.exports=t},264:function(e,t,s){"use strict";s(12);var i=s(27),a=s(42),r=s(67),n=s(64),o=s(249),l=s(239),c=s(188);const h=({ecomSearch:e,term:t,page:s,defaultSort:i})=>{e.reset(),i&&e.setSortOrder(i),t&&e.setSearchTerm(t),s&&e.setPageNumber(s)};var d={name:"SearchEngine",components:{Portal:o.a,ABackdrop:l.a,ProductCard:c.a},props:{term:String,page:{type:Number,default:1},pageSize:{type:Number,default:24},brands:Array,categories:Array,isFixedBrands:Boolean,isFixedCategories:Boolean,defaultSort:String,defaultFilters:Object,autoFixScore:{type:Number,default:.6},isFilterable:{type:Boolean,default:!0},hasPopularItems:{type:Boolean,default:!0},canLoadMore:{type:Boolean,default:!0},loadMoreSelector:String,canRetry:{type:Boolean,default:!0},canShowItems:{type:Boolean,default:!0},productCardProps:Object,gridsData:{type:Array,default(){if("object"==typeof window&&window.storefront&&window.storefront.data)return window.storefront.data.grids}}},data:()=>({suggestedTerm:"",resultItems:[],totalSearchResults:0,hasSearched:!1,noResultsTerm:"",keepNoResultsTerm:!1,filters:[],lastSelectedFilter:null,selectedOptions:{},selectedSortOption:null,countOpenRequests:0,lastRequestId:null,isScheduled:!1,isLoadingMore:!1,hasNetworkError:!1,popularItems:[],hasSetPopularItems:!1,isAsideVisible:!1,searchFilterId:0}),computed:{i19clearFilters:()=>Object(a.a)(i.I),i19closeFilters:()=>Object(a.a)(i.K),i19didYouMean:()=>Object(a.a)(i.ab),i19filter:()=>Object(a.a)(i.qb),i19filterResults:()=>Object(a.a)(i.rb),i19itemsFound:()=>Object(a.a)(i.Qb),i19noResultsFor:()=>Object(a.a)(i.mc),i19popularProducts:()=>Object(a.a)(i.Ic),i19refineSearch:()=>Object(a.a)(i.Uc),i19relevance:()=>Object(a.a)(i.Xc),i19results:()=>Object(a.a)(i.ad),i19searchAgain:()=>Object(a.a)(i.gd),i19searchingFor:()=>Object(a.a)(i.jd),i19searchOfflineErrorMsg:()=>Object(a.a)(i.hd),i19sort:()=>Object(a.a)(i.zd),ecomSearch:()=>new n.a,isSearching(){return this.countOpenRequests>0},hasEmptyResult(){return this.hasSearched&&!this.resultItems.length},sortOptions:()=>[{value:null,label:Object(a.a)(i.Xc)},{value:"sales",label:Object(a.a)(i.cd)},{value:"lowest_price",label:Object(a.a)(i.Wb)},{value:"highest_price",label:Object(a.a)(i.Eb)},{value:"news",label:Object(a.a)(i.Wc)},{value:"slug",label:Object(a.a)(i.fc)}],hasSelectedOptions(){for(const e in this.selectedOptions)if(this.selectedOptions[e]&&this.selectedOptions[e].length)return!0;return!1},isNavVisible(){return this.hasSearched&&this.isFilterable&&(this.isSearching||this.totalSearchResults>8||this.hasSelectedOptions)},isResultsVisible(){return this.hasSearched&&!this.isSearching||this.suggestedItems.length},hasFilters(){return this.hasSelectedOptions||this.filters.find((({options:e})=>e.length))},suggestedItems(){return this.resultItems.length?this.resultItems:this.popularItems},loadObserver(){return this.canLoadMore&&Object(r.a)("#search-engine-load-more",{load:()=>{this.isLoadingMore=!0,this.fetchItems()}})}},methods:{fetchItems(e,t){const s=t?new n.a:this.ecomSearch,i=Date.now();this.countOpenRequests++,this.lastRequestId=i,this.isLoadingMore&&s.setPageNumber(this.page+Math.ceil(this.resultItems.length/this.pageSize));const a=s.setPageSize(this.pageSize).fetch().then((e=>(this.lastRequestId===i&&(this.hasNetworkError=!1,t||this.handleSearchResult()),!t&&(this.term||this.brands||this.categories)||(this.hasSetPopularItems=!0,this.popularItems=s.getItems()),e))).catch((s=>{console.error(s),(this.lastRequestId===i||t)&&(!this.canRetry||e||s.response&&400===s.response.status?this.hasNetworkError=!0:this.fetchItems(!0,t))})).finally((()=>{this.countOpenRequests--,this.isLoadingMore=!1}));this.$emit("fetch",{ecomSearch:s,fetching:a})},updateFilters(){const e=[],t=(t,s,i)=>{let a=this.filters.findIndex((e=>e.filter===t));if(t!==this.lastSelectedFilter){if(-1===a&&(a=this.filters.length),this[`isFixed${t}`]){const e=this[t.toLowerCase()];e&&(s=s.filter((({key:t})=>-1===e.indexOf(t))))}this.filters[a]={filter:t,options:s,isSpec:i};const e=this.selectedOptions[t]?this.selectedOptions[t].filter((e=>s.find((({key:t})=>t===e)))):[];this.$set(this.selectedOptions,t,e)}e.push(a)};t("Brands",this.ecomSearch.getBrands()),t("Categories",this.ecomSearch.getCategories()),this.ecomSearch.getSpecs().forEach((({key:e,options:s},i)=>{t(e,s,!0)})),this.filters=this.filters.filter(((t,s)=>e.includes(s))),this.searchFilterId=Date.now()},handleSuggestions(){if(this.term){const{ecomSearch:e}=this,t=this.term.toLowerCase();let s=t,i=!1;this.suggestedTerm="",e.getTermSuggestions().forEach((({options:e,text:a})=>{if(e.length){const r=e[0],n=r.text.toLowerCase();!this.totalSearchResults&&this.autoFixScore>0&&r.score>=this.autoFixScore&&-1===n.indexOf(t)&&(i=!0),s=s.replace(new RegExp(a,"i"),n)}})),this.keepNoResultsTerm?this.keepNoResultsTerm=!1:this.noResultsTerm="",s!==t&&(i?(this.noResultsTerm=t,this.keepNoResultsTerm=!0,this.$emit("update:term",s)):this.suggestedTerm=s,e.history.shift())}},handleSearchResult(){const{ecomSearch:e}=this;if(this.totalSearchResults=e.getTotalCount(),this.resultItems=this.isLoadingMore?this.resultItems.concat(e.getItems()):e.getItems(),this.updateFilters(),!this.hasSearched&&this.defaultFilters)for(const e in this.defaultFilters){const t=this.defaultFilters[e];Array.isArray(t)?t.forEach((t=>this.setFilterOption(e,t,!0))):"string"==typeof t&&this.setFilterOption(e,t,!0)}this.handleSuggestions(),this.totalSearchResults||!this.hasPopularItems||this.hasSetPopularItems||this.fetchItems(!1,!0),this.$emit(this.isLoadingMore?"load-more":"search",{ecomSearch:e}),this.hasSearched||this.$nextTick((()=>{setTimeout((()=>{this.hasSearched=!0}),100)}))},scheduleFetch(){this.isScheduled||(this.isScheduled=!0,this.$nextTick((()=>{setTimeout((()=>{this.fetchItems(),this.isScheduled=!1}),30)})))},resetAndFetch(){h(this),this.handlePresetedOptions(),this.scheduleFetch()},toggleFilters(e){this.isAsideVisible="boolean"==typeof e?e:!this.isAsideVisible},getFilterLabel(e){switch(e){case"Brands":return Object(a.a)(i.t);case"Categories":return Object(a.a)(i.D);default:if(this.gridsData){const t=this.gridsData.find((t=>t.grid_id===e));if(t)return t.title||t.grid_id}}return e},handlePresetedOptions(){["brands","categories"].forEach((e=>{if(this[e]&&this[e].length){const t=e.charAt(0).toUpperCase()+e.slice(1);this[`isFixed${t}`]||(this.selectedOptions[t]=this[e]),this.updateSearchFilter(t)}}))},updateSearchFilter(e){const{ecomSearch:t}=this;let s=this.selectedOptions[e];switch(void 0!==s&&s.length||(s=null),e){case"Brands":this.isFixedBrands&&this.brands&&(s=s?s.concat(this.brands):this.brands),t.setBrandNames(s);break;case"Categories":t.setCategoryNames(s),this.isFixedCategories&&this.categories&&t.mergeFilter({terms:{"categories.name":this.categories}});break;default:t.setSpec(e,s)}},setFilterOption(e,t,s){const{selectedOptions:i}=this,a=i[e];if(a){const i=a.indexOf(t);s?-1===i&&(this.lastSelectedFilter=e,a.push(t)):(i>-1&&a.splice(i,1),a.length||this.lastSelectedFilter!==e||(this.lastSelectedFilter=null)),this.updateSearchFilter(e),this.scheduleFetch()}},clearFilters(){const{selectedOptions:e}=this;for(const t in e)e[t]&&(e[t]=[],this.updateSearchFilter(t));this.fetchItems()},setSortOrder(e){this.selectedSortOption=e,this.ecomSearch.setSortOrder(e),this.page>1?this.page=1:this.scheduleFetch()}},watch:{term(){this.resetAndFetch()},brands(){this.resetAndFetch()},categories(){this.resetAndFetch()},page(e){this.ecomSearch.setPageNumber(e),this.scheduleFetch()},isSearching(e){!e&&this.loadObserver&&this.$nextTick((()=>{this.loadObserver.observe()}))}},created(){h(this),this.handlePresetedOptions(),this.fetchItems()}},u=(s(315),s(51)),p=Object(u.a)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"search-engine"},[s("a-backdrop",{attrs:{"is-visible":e.isAsideVisible},on:{"update:isVisible":function(t){e.isAsideVisible=t},"update:is-visible":function(t){e.isAsideVisible=t}}}),s("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"}},[s("aside",{directives:[{name:"show",rawName:"v-show",value:e.isAsideVisible,expression:"isAsideVisible"}],staticClass:"search-engine__aside card shadow"},[e._t("filters",[s("header",{staticClass:"card-header"},[e._v(" "+e._s(e.i19refineSearch)+" "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":e.i19closeFilters},on:{click:e.toggleFilters}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),s("div",{key:e.searchFilterId,staticClass:"card-body"},e._l(e.filters,(function(t,i){var a=t.filter,r=t.options,n=t.isSpec;return r.length?s("div",{key:"filters-"+a,staticClass:"search-engine__filter",class:"search-engine__filter--"+a},[e._o([s("button",{staticClass:"btn",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapse-"+a,"aria-expanded":i<5?"true":"false","aria-controls":"collapse-"+a}},[s("i",{staticClass:"fas fa-chevron-down"}),s("i",{staticClass:"fas fa-chevron-up"}),e._v(" "+e._s(e.getFilterLabel(a))+" ")]),s("div",{staticClass:"collapse",class:i<5?"show":null,attrs:{id:"collapse-"+a}},e._l(r,(function(t,i){return s("div",{key:a+"-"+i,staticClass:"search-engine__option custom-control custom-checkbox"},[s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:a+"-"+i},domProps:{checked:e.selectedOptions[a].indexOf(t.key)>-1},on:{change:function(s){return e.setFilterOption(a,t.key,s.target.checked)}}}),s("label",{staticClass:"custom-control-label",attrs:{for:a+"-"+i}},[e._v(" "+e._s(t.key)+" "),n?e._e():s("small",[e._v(" ("+e._s(t.doc_count)+") ")])])])})),0)],0,"filters-"+a)],2):e._e()})),0),s("footer",{staticClass:"card-footer"},[s("button",{staticClass:"btn btn-sm btn-block btn-outline-secondary",attrs:{type:"button"},on:{click:e.clearFilters}},[s("span",{staticClass:"mr-1"},[s("i",{staticClass:"fas fa-trash-alt"})]),e._v(" "+e._s(e.i19clearFilters)+" ")])])])],2)]),s("transition",{attrs:{"enter-active-class":"animated fadeInRight slower","leave-active-class":"animated fadeOutRight"}},[e.isNavVisible&&e.hasFilters?s("button",{staticClass:"search-engine__aside-open btn btn-secondary",attrs:{type:"button","aria-label":e.i19filterResults,disabled:e.isSearching},on:{click:function(t){return e.toggleFilters(!0)}}},[e.isSearching?s("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])]):s("span",[s("span",{staticClass:"d-none d-md-inline"},[s("i",{staticClass:"fas fa-search"})]),s("i",{staticClass:"fas fa-filter"})])]):e._e()]),s("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp fast position-absolute"}},[e.isNavVisible?s("div",{staticClass:"search-engine__nav"},[s("div",{staticClass:"container"},[e._t("nav",[s("div",{staticClass:"search-engine__count"},[s("strong",[e._v(e._s(e.totalSearchResults))]),e._v(" "+e._s(e.i19itemsFound)+" "),e.isSearching?s("div",{staticClass:"search-engine__spinner spinner-grow",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])]):e._e()]),e.isFilterable?s("div",{staticClass:"search-engine__toggles"},[e.hasFilters?s("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(t){return e.toggleFilters(!0)}}},[s("i",{staticClass:"fas fa-filter mr-1"}),s("span",{staticClass:"d-none d-md-inline"},[e._v(" "+e._s(e.i19filterResults)+" ")]),s("span",{staticClass:"d-md-none"},[e._v(" "+e._s(e.i19filter)+" ")])]):e._e(),s("div",{staticClass:"dropdown"},[s("button",{staticClass:"btn btn-light",attrs:{type:"button",id:"search-engine-sort","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-sort mr-1"}),e._v(" "+e._s(e.i19sort)+" ")]),s("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"search-engine-sort"}},e._l(e.sortOptions,(function(t,i){var a=t.value,r=t.label;return s("a",{key:"sort-"+i,staticClass:"dropdown-item",class:"search-engine__sort--"+a,attrs:{href:"#",active:e.selectedSortOption===a},on:{click:function(t){return t.preventDefault(),e.setSortOrder(a)}}},[e._v(" "+e._s(r)+" ")])})),0)])]):e._e()],null,{totalSearchResults:e.totalSearchResults,toggleFilters:e.toggleFilters})],2)]):e._e()]),s("transition",{attrs:{"enter-active-class":"animated fadeIn slower"}},[e.isResultsVisible?s("div",{staticClass:"search-engine__results fade",style:{opacity:e.isSearching&&!e.isLoadingMore?.4:1}},[s("div",{staticClass:"container"},[s("div",{staticClass:"search-engine__info px-lg-4"},[e.term?[e.hasEmptyResult?s("div",{staticClass:"search-engine__no-results"},[s("div",{staticClass:"lead mb-2"},[e.suggestedTerm?s("span",[e._v(" "+e._s(e.i19didYouMean)+" "),s("a",{attrs:{href:"#"},domProps:{textContent:e._s(e.suggestedTerm)},on:{click:function(t){return t.preventDefault(),e.$emit("update:term",e.suggestedTerm)}}}),e._v(" ? ")]):e._e(),e._v(" "+e._s(e.i19noResultsFor)+" "),s("em",[e._v(e._s(e.term))])]),e.popularItems.length?s("h4",[e._v(" "+e._s(e.i19popularProducts)+" ")]):e._e()]):s("div",{staticClass:"search-engine__terms"},[e.noResultsTerm?s("span",{staticClass:"d-none d-lg-inline"},[e._v(" "+e._s(e.i19noResultsFor)+" "),s("s",[e._v(e._s(e.noResultsTerm))]),e._v(". ")]):e._e(),s("span",{staticClass:"d-none d-md-inline"},[e._v(" "+e._s(e.i19searchingFor)+": ")]),s("h1",[e._v(e._s(e.term))])])]:e.popularItems.length?s("h3",[e._v(" "+e._s(e.i19popularProducts)+" ")]):e._e(),s("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"}},[e.hasSelectedOptions&&e.isFilterable?s("div",[s("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:e.clearFilters}},[s("i",{staticClass:"fas fa-trash-alt mr-1"}),e._v(" "+e._s(e.i19clearFilters)+" ")]),e._l(e.selectedOptions,(function(t,i){return e._l(t,(function(t){return s("button",{staticClass:"search-engine__selected btn btn-sm btn-light",attrs:{type:"button"},on:{click:function(s){return e.setFilterOption(i,t,!1)}}},[s("i",{staticClass:"fas fa-times mr-1"}),e._v(" "+e._s(t)+" "),s("small",[e._v(e._s(e.getFilterLabel(i)))])])}))}))],2):e._e()])],2),e.canShowItems?s("article",{staticClass:"search-engine__retail"},[s("div",{staticClass:"row"},e._l(e.suggestedItems,(function(t){return s("div",{key:t._id,staticClass:"col-6 col-md-4 col-lg-3"},[e._t("product-card",[s("product-card",e._b({staticClass:"search-engine__item",attrs:{product:t}},"product-card",e.productCardProps,!1))],null,{product:t})],2)})),0)]):e._e(),s("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[e.hasNetworkError?s("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[s("i",{staticClass:"fas fa-wifi mr-2"}),e._v(" "+e._s(e.i19searchOfflineErrorMsg)+" "),s("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.fetchItems(t)}}},[e._v(" "+e._s(e.i19searchAgain)+" ")])]):e._e()])],1)]):e._e()]),s("transition",{attrs:{"leave-active-class":"animated fadeOut"}},[!e.hasSearched||e.isLoadingMore?e._t("default"):e._e()],2),s(e.loadMoreSelector?"portal":"div",{tag:"component",attrs:{selector:e.loadMoreSelector}},[e.resultItems.length<e.totalSearchResults?s("div",{key:e.lastRequestId,staticStyle:{width:"100%","margin-top":"20px",height:"5px"},attrs:{id:"search-engine-load-more"}}):e._e()])],1)}),[],!1,null,null,null);t.a=p.exports},272:function(e,t,s){var i=s(316);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,s(173).default)("6640bcbb",i,!0,{})},315:function(e,t,s){"use strict";s(272)},316:function(e,t,s){(t=s(172)(!1)).push([e.i,'.search-engine{position:relative}.search-engine__nav{padding:var(--spacer-2);margin-bottom:var(--spacer-3);background:var(--light);color:var(--gray)}.search-engine__nav>div{display:flex;align-items:center;justify-content:space-between}.search-engine__toggles{display:flex}.search-engine__toggles button{margin-left:var(--spacer-1);color:var(--secondary)}.search-engine__count{position:relative}.search-engine__spinner{position:absolute;top:50%;right:-3rem;width:1.75rem;height:1.75rem;margin-top:-.875rem;color:var(--secondary)}.search-engine__aside{position:fixed;width:280px;max-width:100%;height:100%;top:0;right:0;z-index:1100;border-radius:0}.search-engine__aside .card-body{overflow-y:auto}.search-engine__aside-open{position:fixed;right:0;bottom:50vh;text-align:right;z-index:890;border-top-right-radius:0;border-bottom-right-radius:0}.search-engine__aside-open .spinner-border{margin-bottom:3px}.search-engine__aside-open .fa-search{opacity:.6}.search-engine__filter:not(:first-child){margin-top:var(--spacer-2)}.search-engine__filter:last-child{margin-bottom:var(--spacer-4)}.search-engine__filter button{padding-left:0;color:var(--secondary);font-size:var(--font-size-lg);font-weight:var(--font-light)}.search-engine__filter button i,.search-engine__filter button svg{font-size:var(--font-size);margin-right:var(--spacer-1);color:var(--gray);opacity:.5;transition:opacity .25s}.search-engine__filter button .fa-chevron-up,.search-engine__filter button[aria-expanded=true] .fa-chevron-down{display:none}.search-engine__filter button[aria-expanded=true] .fa-chevron-up{display:inherit}.search-engine__filter button:hover i,.search-engine__filter button:hover svg{opacity:1}.search-engine__filter button:focus{box-shadow:none}.search-engine__option{color:var(--primary-light)}.search-engine__option small{color:var(--gray)}.search-engine__selected{margin-left:var(--spacer-2);margin-bottom:var(--spacer-2)}.search-engine__selected>small{color:var(--gray)}.search-engine__selected>small:before{content:" / "}.search-engine__info{padding-bottom:var(--spacer-3)}.search-engine__terms>span{font-weight:var(--font-light)}.search-engine__terms>span:not(:last-of-type){color:var(--text-muted)}.search-engine__retail{padding:var(--spacer-2) 0}.search-engine__item{margin-bottom:var(--spacer-3)}',""]),e.exports=t}}]);
//# sourceMappingURL=chunk.aa79d86a4f5791075139.js.map