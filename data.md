<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <link rel="preload" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-css3d06bca57317a8eb9b50f95b795e43b01907be016ef5d3ddc363bcf7bac67.css" as="style" media="all"/>
        <link rel="preload" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-csscafabfb31988724043180849e650de823fc05a8abdddf2fb120ce48b96b61.css" as="style" media="all"/>
        <link rel="preload" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-cssdef7042228a9effd77fe18226438b70e7fbec8b1370ee34234b8d6211aee5.css" as="style" media="all"/>
        <link rel="preload" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-csscf404e07151928822ecddc2a15f79f54462f2b0fe0426f1e502cc0e6d786b.css" as="style" media="all"/>
        <link rel="preload" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-css0641553667bb40f85736e2db4f56ee84857cf3a78ba02dcc1d3e8a6091bc7.css" as="style" media="all"/>
        <link rel="preload" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-css4b0afe459b51de3580e8715b58f61646eac00f5fd16159fa79f9514f6a25c.css" as="style" media="all"/>
        <link rel="preload" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-css001b11e451989176eb693923f1b4d6c0159cc0d253d73f8555ad1d0f6ed95.css" as="style" media="all"/>
        <link rel="preload" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-css0294821a3249cde6cd359396813767e4cc67c96b1a47a4a4d4c1d966e6615.css" as="style" media="all"/>
        <link rel="preload" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-css384ab84a7b0d66a88922e790c70a39385e85efdd66ec7ece70316ab7d8286.css" as="style" media="all"/>
        <link rel="preload" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-css968386c6eac3631c9975486b0af690512462dc5f04d8aeffa6f9507d705d8.css" as="style" media="all"/>
        <link rel="preload" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-cssbdbd164fedd80e2a5fb03b936244a8083032de18a1e56ea9e89ea001f92bf.css" as="style" media="all"/>
        <link rel="preload" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-cssb2a9761e60635742ef53efa508d74df2a23f4e755334de27775b26f744600.css" as="style" media="all"/>
        <link rel="preload" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-cssf0382425edcfd5b004af76898b050c8e936d4aabbe1e211df5ea88f062825.css" as="style" media="all"/>
        <link rel="preload" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-cssf1d8376347f1bb70caf3fbd8391d38f6a612fbdd278c1d642d1f316e21f95.css" as="style" media="all"/>
        <script data-cfasync="false">
            if (navigator.userAgent.match(/MSIE|Internet Explorer/i) || navigator.userAgent.match(/Trident\/7\..*?rv:11/i)) {
                var href = document.location.href;
                if (!href.match(/[?&]iebrowser/)) {
                    if (href.indexOf("?") == -1) {
                        if (href.indexOf("#") == -1) {
                            document.location.href = href + "?iebrowser=1"
                        } else {
                            document.location.href = href.replace("#", "?iebrowser=1#")
                        }
                    } else {
                        if (href.indexOf("#") == -1) {
                            document.location.href = href + "&iebrowser=1"
                        } else {
                            document.location.href = href.replace("#", "&iebrowser=1#")
                        }
                    }
                }
            }
        </script>
        <script data-cfasync="false">
            class FVMLoader {
                constructor(e) {
                    this.triggerEvents = e,
                    this.eventOptions = {
                        passive: !0
                    },
                    this.userEventListener = this.triggerListener.bind(this),
                    this.delayedScripts = {
                        normal: [],
                        async: [],
                        defer: []
                    },
                    this.allJQueries = []
                }
                _addUserInteractionListener(e) {
                    this.triggerEvents.forEach(t => window.addEventListener(t, e.userEventListener, e.eventOptions))
                }
                _removeUserInteractionListener(e) {
                    this.triggerEvents.forEach(t => window.removeEventListener(t, e.userEventListener, e.eventOptions))
                }
                triggerListener() {
                    this._removeUserInteractionListener(this),
                    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", this._loadEverythingNow.bind(this)) : this._loadEverythingNow()
                }
                async _loadEverythingNow() {
                    this._runAllDelayedCSS(),
                    this._delayEventListeners(),
                    this._delayJQueryReady(this),
                    this._handleDocumentWrite(),
                    this._registerAllDelayedScripts(),
                    await this._loadScriptsFromList(this.delayedScripts.normal),
                    await this._loadScriptsFromList(this.delayedScripts.defer),
                    await this._loadScriptsFromList(this.delayedScripts.async),
                    await this._triggerDOMContentLoaded(),
                    await this._triggerWindowLoad(),
                    window.dispatchEvent(new Event("wpr-allScriptsLoaded"))
                }
                _registerAllDelayedScripts() {
                    document.querySelectorAll("script[type=fvmdelay]").forEach(e => {
                        e.hasAttribute("src") ? e.hasAttribute("async") && !1 !== e.async ? this.delayedScripts.async.push(e) : e.hasAttribute("defer") && !1 !== e.defer || "module" === e.getAttribute("data-type") ? this.delayedScripts.defer.push(e) : this.delayedScripts.normal.push(e) : this.delayedScripts.normal.push(e)
                    }
                    )
                }
                _runAllDelayedCSS() {
                    document.querySelectorAll("link[rel=fvmdelay]").forEach(e => {
                        e.setAttribute("rel", "stylesheet")
                    }
                    )
                }
                async _transformScript(e) {
                    return await this._requestAnimFrame(),
                    new Promise(t => {
                        const n = document.createElement("script");
                        let r;
                        [...e.attributes].forEach(e => {
                            let t = e.nodeName;
                            "type" !== t && ("data-type" === t && (t = "type",
                            r = e.nodeValue),
                            n.setAttribute(t, e.nodeValue))
                        }
                        ),
                        e.hasAttribute("src") ? (n.addEventListener("load", t),
                        n.addEventListener("error", t)) : (n.text = e.text,
                        t()),
                        e.parentNode.replaceChild(n, e)
                    }
                    )
                }
                async _loadScriptsFromList(e) {
                    const t = e.shift();
                    return t ? (await this._transformScript(t),
                    this._loadScriptsFromList(e)) : Promise.resolve()
                }
                _delayEventListeners() {
                    let e = {};
                    function t(t, n) {
                        !function(t) {
                            function n(n) {
                                return e[t].eventsToRewrite.indexOf(n) >= 0 ? "wpr-" + n : n
                            }
                            e[t] || (e[t] = {
                                originalFunctions: {
                                    add: t.addEventListener,
                                    remove: t.removeEventListener
                                },
                                eventsToRewrite: []
                            },
                            t.addEventListener = function() {
                                arguments[0] = n(arguments[0]),
                                e[t].originalFunctions.add.apply(t, arguments)
                            }
                            ,
                            t.removeEventListener = function() {
                                arguments[0] = n(arguments[0]),
                                e[t].originalFunctions.remove.apply(t, arguments)
                            }
                            )
                        }(t),
                        e[t].eventsToRewrite.push(n)
                    }
                    function n(e, t) {
                        let n = e[t];
                        Object.defineProperty(e, t, {
                            get: () => n || function() {}
                            ,
                            set(r) {
                                e["wpr" + t] = n = r
                            }
                        })
                    }
                    t(document, "DOMContentLoaded"),
                    t(window, "DOMContentLoaded"),
                    t(window, "load"),
                    t(window, "pageshow"),
                    t(document, "readystatechange"),
                    n(document, "onreadystatechange"),
                    n(window, "onload"),
                    n(window, "onpageshow")
                }
                _delayJQueryReady(e) {
                    let t = window.jQuery;
                    Object.defineProperty(window, "jQuery", {
                        get: () => t,
                        set(n) {
                            if (n && n.fn && !e.allJQueries.includes(n)) {
                                n.fn.ready = n.fn.init.prototype.ready = function(t) {
                                    e.domReadyFired ? t.bind(document)(n) : document.addEventListener("DOMContentLoaded2", () => t.bind(document)(n))
                                }
                                ;
                                const t = n.fn.on;
                                n.fn.on = n.fn.init.prototype.on = function() {
                                    if (this[0] === window) {
                                        function e(e) {
                                            return e.split(" ").map(e => "load" === e || 0 === e.indexOf("load.") ? "wpr-jquery-load" : e).join(" ")
                                        }
                                        "string" == typeof arguments[0] || arguments[0]instanceof String ? arguments[0] = e(arguments[0]) : "object" == typeof arguments[0] && Object.keys(arguments[0]).forEach(t => {
                                            delete Object.assign(arguments[0], {
                                                [e(t)]: arguments[0][t]
                                            })[t]
                                        }
                                        )
                                    }
                                    return t.apply(this, arguments),
                                    this
                                }
                                ,
                                e.allJQueries.push(n)
                            }
                            t = n
                        }
                    })
                }
                async _triggerDOMContentLoaded() {
                    this.domReadyFired = !0,
                    await this._requestAnimFrame(),
                    document.dispatchEvent(new Event("DOMContentLoaded2")),
                    await this._requestAnimFrame(),
                    window.dispatchEvent(new Event("DOMContentLoaded2")),
                    await this._requestAnimFrame(),
                    document.dispatchEvent(new Event("wpr-readystatechange")),
                    await this._requestAnimFrame(),
                    document.wpronreadystatechange && document.wpronreadystatechange()
                }
                async _triggerWindowLoad() {
                    await this._requestAnimFrame(),
                    window.dispatchEvent(new Event("wpr-load")),
                    await this._requestAnimFrame(),
                    window.wpronload && window.wpronload(),
                    await this._requestAnimFrame(),
                    this.allJQueries.forEach(e => e(window).trigger("wpr-jquery-load")),
                    window.dispatchEvent(new Event("wpr-pageshow")),
                    await this._requestAnimFrame(),
                    window.wpronpageshow && window.wpronpageshow()
                }
                _handleDocumentWrite() {
                    const e = new Map;
                    document.write = document.writeln = function(t) {
                        const n = document.currentScript
                          , r = document.createRange()
                          , i = n.parentElement;
                        let a = e.get(n);
                        void 0 === a && (a = n.nextSibling,
                        e.set(n, a));
                        const s = document.createDocumentFragment();
                        r.setStart(s, 0),
                        s.appendChild(r.createContextualFragment(t)),
                        i.insertBefore(s, a)
                    }
                }
                async _requestAnimFrame() {
                    return new Promise(e => requestAnimationFrame(e))
                }
                static run() {
                    const e = new FVMLoader(["keydown", "mousemove", "touchmove", "touchstart", "touchend", "wheel"]);
                    e._addUserInteractionListener(e)
                }
            }
            FVMLoader.run();
        </script>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <meta name="google-site-verification" content="hd4uMBTJRHv768zYVqr2LT5mqmV467BNbtEZQfV5Cu4"/>
        <meta property="fb:app_id" content="1267414536602745"/>
        <meta name="google-site-verification" content="yu5vBCPLt3U57H0KPErJpOZm5RVtNvjYVS7_--0GJhU"/>
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'/>
        <title>Our Team - Gram Vikas</title>
        <link rel="canonical" href="https://www.gramvikas.org/our-team/"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content="Our Team - Gram Vikas"/>
        <meta property="og:description" content="fgfcgvhgvhv"/>
        <meta property="og:url" content="https://www.gramvikas.org/our-team/"/>
        <meta property="og:site_name" content="Gram Vikas"/>
        <meta property="article:modified_time" content="2021-04-23T09:39:25+00:00"/>
        <meta property="og:image" content="https://www.gramvikas.org/wp-content/uploads/2019/04/Team-Collage.jpg"/>
        <meta property="og:image:width" content="1804"/>
        <meta property="og:image:height" content="749"/>
        <meta property="og:image:type" content="image/jpeg"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:label1" content="Est. reading time"/>
        <meta name="twitter:data1" content="1 minute"/>
        <script type="application/ld+json" class="yoast-schema-graph">
            {
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "WebPage",
                        "@id": "https://www.gramvikas.org/our-team/",
                        "url": "https://www.gramvikas.org/our-team/",
                        "name": "Our Team - Gram Vikas",
                        "isPartOf": {
                            "@id": "https://www.gramvikas.org/#website"
                        },
                        "primaryImageOfPage": {
                            "@id": "https://www.gramvikas.org/our-team/#primaryimage"
                        },
                        "image": {
                            "@id": "https://www.gramvikas.org/our-team/#primaryimage"
                        },
                        "thumbnailUrl": "https://www.gramvikas.org/wp-content/uploads/2019/04/Team-Collage.jpg",
                        "datePublished": "2019-01-30T12:21:26+00:00",
                        "dateModified": "2021-04-23T09:39:25+00:00",
                        "breadcrumb": {
                            "@id": "https://www.gramvikas.org/our-team/#breadcrumb"
                        },
                        "inLanguage": "en-US",
                        "potentialAction": [
                            {
                                "@type": "ReadAction",
                                "target": [
                                    "https://www.gramvikas.org/our-team/"
                                ]
                            }
                        ]
                    },
                    {
                        "@type": "ImageObject",
                        "inLanguage": "en-US",
                        "@id": "https://www.gramvikas.org/our-team/#primaryimage",
                        "url": "https://www.gramvikas.org/wp-content/uploads/2019/04/Team-Collage.jpg",
                        "contentUrl": "https://www.gramvikas.org/wp-content/uploads/2019/04/Team-Collage.jpg",
                        "width": 1804,
                        "height": 749
                    },
                    {
                        "@type": "BreadcrumbList",
                        "@id": "https://www.gramvikas.org/our-team/#breadcrumb",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.gramvikas.org/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Our Team"
                            }
                        ]
                    },
                    {
                        "@type": "WebSite",
                        "@id": "https://www.gramvikas.org/#website",
                        "url": "https://www.gramvikas.org/",
                        "name": "Gram Vikas",
                        "description": "Gram Vikas is a development organisation enabling sustainable and equitable processes for a dignified quality of life of the rural communities.",
                        "publisher": {
                            "@id": "https://www.gramvikas.org/#organization"
                        },
                        "potentialAction": [
                            {
                                "@type": "SearchAction",
                                "target": {
                                    "@type": "EntryPoint",
                                    "urlTemplate": "https://www.gramvikas.org/?s={search_term_string}"
                                },
                                "query-input": {
                                    "@type": "PropertyValueSpecification",
                                    "valueRequired": true,
                                    "valueName": "search_term_string"
                                }
                            }
                        ],
                        "inLanguage": "en-US"
                    },
                    {
                        "@type": "Organization",
                        "@id": "https://www.gramvikas.org/#organization",
                        "name": "Gram Vikas",
                        "url": "https://www.gramvikas.org/",
                        "logo": {
                            "@type": "ImageObject",
                            "inLanguage": "en-US",
                            "@id": "https://www.gramvikas.org/#/schema/logo/image/",
                            "url": "https://www.gramvikas.org/wp-content/uploads/2019/04/GV-logo.png",
                            "contentUrl": "https://www.gramvikas.org/wp-content/uploads/2019/04/GV-logo.png",
                            "width": 480,
                            "height": 150,
                            "caption": "Gram Vikas"
                        },
                        "image": {
                            "@id": "https://www.gramvikas.org/#/schema/logo/image/"
                        }
                    }
                ]
            }</script>
        <link rel="alternate" type="application/rss+xml" title="Gram Vikas &raquo; Feed" href="https://www.gramvikas.org/feed/"/>
        <link rel="alternate" type="application/rss+xml" title="Gram Vikas &raquo; Comments Feed" href="https://www.gramvikas.org/comments/feed/"/>
        <link rel="shortcut icon" type="image/x-icon" href="https://www.gramvikas.org/wp-content/themes/gramvikas">
        <link href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-css3d06bca57317a8eb9b50f95b795e43b01907be016ef5d3ddc363bcf7bac67.css" rel="stylesheet" media="all">
        <link rel="stylesheet" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-csscafabfb31988724043180849e650de823fc05a8abdddf2fb120ce48b96b61.css" media="all">
        <link rel="stylesheet" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-cssdef7042228a9effd77fe18226438b70e7fbec8b1370ee34234b8d6211aee5.css" media="all">
        <link rel="stylesheet" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-csscf404e07151928822ecddc2a15f79f54462f2b0fe0426f1e502cc0e6d786b.css" media="all">
        <link rel="stylesheet" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-css0641553667bb40f85736e2db4f56ee84857cf3a78ba02dcc1d3e8a6091bc7.css" media="all">
        <link rel="stylesheet" href="https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-css4b0afe459b51de3580e8715b58f61646eac00f5fd16159fa79f9514f6a25c.css" media="all">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://www.gramvikas.org/wp-content/themes/gramvikas/js/popper.min.js"></script>
        <script src="https://www.gramvikas.org/wp-content/themes/gramvikas/js/bootstrap.min.js"></script>
        <script src="https://www.gramvikas.org/wp-content/themes/gramvikas/js/bootstrap-datepicker.min.js"></script>
        <script src="https://www.gramvikas.org/wp-content/themes/gramvikas/js/owl.carousel.min.js"></script>
        <style media="all">
            .flowplayer {
                max-width: 100%!important;
                max-height: 100%!important
            }

            .fp-player>a {
                opacity: 0
            }

            .news-content table {
                font-weight: 400;
                max-width: 800px;
                margin: 0 auto 20px
            }

            .fv-fp-splash-text {
                z-index: 1!important
            }

            table td[rowspan] {
                border: 1px solid #dee2e6
            }

            .table-bordered td,.table-bordered th {
                padding: 5px
            }

            .flowplayer {
                background-size: cover!important;
                background-position: bottom!important
            }

            .grid-4-video-blk .grid-4-title>div {
                height: 100%
            }

            .ab-blk ul {
                padding-left: 0!important;
                padding-top: 10px;
                padding-bottom: 10px
            }

            .ourwork-row {
                padding-top: 10px
            }

            .main-menu .dropdown-menu a {
                width: auto;
                margin: 0 10px
            }

            .whyus .dropdown-menu {
                padding-top: 10px;
                padding-bottom: 10px
            }
        </style>
        <script>
            $(function() {
                $('table').removeClass('table-hover').addClass('table-bordered');
            });
        </script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-143744184-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', 'UA-143744184-1');
        </script>
        <style id='wp-img-auto-sizes-contain-inline-css' type='text/css' media="all">
            img:is([sizes=auto i],[sizes^="auto," i]) {
                contain-intrinsic-size: 3000px 1500px
            }
        </style>
        <link rel='stylesheet' id='sdm-styles-css' href='https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-css001b11e451989176eb693923f1b4d6c0159cc0d253d73f8555ad1d0f6ed95.css' type='text/css' media='all'/>
        <style id='wp-block-library-inline-css' type='text/css' media="all">
            :root {
                --wp-block-synced-color: #7a00df;
                --wp-block-synced-color--rgb: 122,0,223;
                --wp-bound-block-color: var(--wp-block-synced-color);
                --wp-editor-canvas-background: #ddd;
                --wp-admin-theme-color: #007cba;
                --wp-admin-theme-color--rgb: 0,124,186;
                --wp-admin-theme-color-darker-10: #006ba1;
                --wp-admin-theme-color-darker-10--rgb: 0,107,160.5;
                --wp-admin-theme-color-darker-20: #005a87;
                --wp-admin-theme-color-darker-20--rgb: 0,90,135;
                --wp-admin-border-width-focus: 2px
            }

            @media (min-resolution: 192dpi) {
                :root {
                    --wp-admin-border-width-focus:1.5px
                }
            }

            .wp-element-button {
                cursor: pointer
            }

            :root .has-very-light-gray-background-color {
                background-color: #eee
            }

            :root .has-very-dark-gray-background-color {
                background-color: #313131
            }

            :root .has-very-light-gray-color {
                color: #eee
            }

            :root .has-very-dark-gray-color {
                color: #313131
            }

            :root .has-vivid-green-cyan-to-vivid-cyan-blue-gradient-background {
                background: linear-gradient(135deg,#00d084,#0693e3)
            }

            :root .has-purple-crush-gradient-background {
                background: linear-gradient(135deg,#34e2e4,#4721fb 50%,#ab1dfe)
            }

            :root .has-hazy-dawn-gradient-background {
                background: linear-gradient(135deg,#faaca8,#dad0ec)
            }

            :root .has-subdued-olive-gradient-background {
                background: linear-gradient(135deg,#fafae1,#67a671)
            }

            :root .has-atomic-cream-gradient-background {
                background: linear-gradient(135deg,#fdd79a,#004a59)
            }

            :root .has-nightshade-gradient-background {
                background: linear-gradient(135deg,#330968,#31cdcf)
            }

            :root .has-midnight-gradient-background {
                background: linear-gradient(135deg,#020381,#2874fc)
            }

            :root {
                --wp--preset--font-size--normal: 16px;
                --wp--preset--font-size--huge: 42px
            }

            .has-regular-font-size {
                font-size: 1em
            }

            .has-larger-font-size {
                font-size: 2.625em
            }

            .has-normal-font-size {
                font-size: var(--wp--preset--font-size--normal)
            }

            .has-huge-font-size {
                font-size: var(--wp--preset--font-size--huge)
            }

            .has-text-align-center {
                text-align: center
            }

            .has-text-align-left {
                text-align: left
            }

            .has-text-align-right {
                text-align: right
            }

            .has-fit-text {
                white-space: nowrap!important
            }

            #end-resizable-editor-section {
                display: none
            }

            .aligncenter {
                clear: both
            }

            .items-justified-left {
                justify-content: flex-start
            }

            .items-justified-center {
                justify-content: center
            }

            .items-justified-right {
                justify-content: flex-end
            }

            .items-justified-space-between {
                justify-content: space-between
            }

            .screen-reader-text {
                border: 0;
                clip-path: inset(50%);
                height: 1px;
                margin: -1px;
                overflow: hidden;
                padding: 0;
                position: absolute;
                width: 1px;
                word-wrap: normal!important
            }

            .screen-reader-text:focus {
                background-color: #ddd;
                clip-path: none;
                color: #444;
                display: block;
                font-size: 1em;
                height: auto;
                left: 5px;
                line-height: normal;
                padding: 15px 23px 14px;
                text-decoration: none;
                top: 5px;
                width: auto;
                z-index: 100000
            }

            html :where(.has-border-color) {
                border-style: solid
            }

            html :where([style*=border-top-color]) {
                border-top-style: solid
            }

            html :where([style*=border-right-color]) {
                border-right-style: solid
            }

            html :where([style*=border-bottom-color]) {
                border-bottom-style: solid
            }

            html :where([style*=border-left-color]) {
                border-left-style: solid
            }

            html :where([style*=border-width]) {
                border-style: solid
            }

            html :where([style*=border-top-width]) {
                border-top-style: solid
            }

            html :where([style*=border-right-width]) {
                border-right-style: solid
            }

            html :where([style*=border-bottom-width]) {
                border-bottom-style: solid
            }

            html :where([style*=border-left-width]) {
                border-left-style: solid
            }

            html :where(img[class*=wp-image-]) {
                height: auto;
                max-width: 100%
            }

            :where(figure) {
                margin: 0 0 1em
            }

            html :where(.is-position-sticky) {
                --wp-admin--admin-bar--position-offset: var(--wp-admin--admin-bar--height,0px)
            }

            @media screen and (max-width: 600px) {
                html :where(.is-position-sticky) {
                    --wp-admin--admin-bar--position-offset:0px
                }
            }
        </style>
        <style id='classic-theme-styles-inline-css' type='text/css' media="all">
            /*! This file is auto-generated */
            .wp-block-button__link {
                color: #fff;
                background-color: #32373c;
                border-radius: 9999px;
                box-shadow: none;
                text-decoration: none;
                padding: calc(.667em + 2px) calc(1.333em + 2px);
                font-size: 1.125em
            }

            .wp-block-file__button {
                background: #32373c;
                color: #fff;
                text-decoration: none
            }
        </style>
        <style id='global-styles-inline-css' type='text/css' media="all">
            :root {
                --wp--preset--aspect-ratio--square: 1;
                --wp--preset--aspect-ratio--4-3: 4/3;
                --wp--preset--aspect-ratio--3-4: 3/4;
                --wp--preset--aspect-ratio--3-2: 3/2;
                --wp--preset--aspect-ratio--2-3: 2/3;
                --wp--preset--aspect-ratio--16-9: 16/9;
                --wp--preset--aspect-ratio--9-16: 9/16;
                --wp--preset--color--black: #000000;
                --wp--preset--color--cyan-bluish-gray: #abb8c3;
                --wp--preset--color--white: #ffffff;
                --wp--preset--color--pale-pink: #f78da7;
                --wp--preset--color--vivid-red: #cf2e2e;
                --wp--preset--color--luminous-vivid-orange: #ff6900;
                --wp--preset--color--luminous-vivid-amber: #fcb900;
                --wp--preset--color--light-green-cyan: #7bdcb5;
                --wp--preset--color--vivid-green-cyan: #00d084;
                --wp--preset--color--pale-cyan-blue: #8ed1fc;
                --wp--preset--color--vivid-cyan-blue: #0693e3;
                --wp--preset--color--vivid-purple: #9b51e0;
                --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);
                --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);
                --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);
                --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);
                --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);
                --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);
                --wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
                --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);
                --wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);
                --wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);
                --wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);
                --wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);
                --wp--preset--font-size--small: 13px;
                --wp--preset--font-size--medium: 20px;
                --wp--preset--font-size--large: 36px;
                --wp--preset--font-size--x-large: 42px;
                --wp--preset--spacing--20: 0.44rem;
                --wp--preset--spacing--30: 0.67rem;
                --wp--preset--spacing--40: 1rem;
                --wp--preset--spacing--50: 1.5rem;
                --wp--preset--spacing--60: 2.25rem;
                --wp--preset--spacing--70: 3.38rem;
                --wp--preset--spacing--80: 5.06rem;
                --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
                --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
                --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
                --wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);
                --wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0)
            }

            :where(.is-layout-flex) {
                gap: .5em
            }

            :where(.is-layout-grid) {
                gap: .5em
            }

            body .is-layout-flex {
                display: flex
            }

            .is-layout-flex {
                flex-wrap: wrap;
                align-items: center
            }

            .is-layout-flex>:is(*,div) {
                margin: 0
            }

            body .is-layout-grid {
                display: grid
            }

            .is-layout-grid>:is(*,div) {
                margin: 0
            }

            :where(.wp-block-columns.is-layout-flex) {
                gap: 2em
            }

            :where(.wp-block-columns.is-layout-grid) {
                gap: 2em
            }

            :where(.wp-block-post-template.is-layout-flex) {
                gap: 1.25em
            }

            :where(.wp-block-post-template.is-layout-grid) {
                gap: 1.25em
            }

            .has-black-color {
                color: var(--wp--preset--color--black)!important
            }

            .has-cyan-bluish-gray-color {
                color: var(--wp--preset--color--cyan-bluish-gray)!important
            }

            .has-white-color {
                color: var(--wp--preset--color--white)!important
            }

            .has-pale-pink-color {
                color: var(--wp--preset--color--pale-pink)!important
            }

            .has-vivid-red-color {
                color: var(--wp--preset--color--vivid-red)!important
            }

            .has-luminous-vivid-orange-color {
                color: var(--wp--preset--color--luminous-vivid-orange)!important
            }

            .has-luminous-vivid-amber-color {
                color: var(--wp--preset--color--luminous-vivid-amber)!important
            }

            .has-light-green-cyan-color {
                color: var(--wp--preset--color--light-green-cyan)!important
            }

            .has-vivid-green-cyan-color {
                color: var(--wp--preset--color--vivid-green-cyan)!important
            }

            .has-pale-cyan-blue-color {
                color: var(--wp--preset--color--pale-cyan-blue)!important
            }

            .has-vivid-cyan-blue-color {
                color: var(--wp--preset--color--vivid-cyan-blue)!important
            }

            .has-vivid-purple-color {
                color: var(--wp--preset--color--vivid-purple)!important
            }

            .has-black-background-color {
                background-color: var(--wp--preset--color--black)!important
            }

            .has-cyan-bluish-gray-background-color {
                background-color: var(--wp--preset--color--cyan-bluish-gray)!important
            }

            .has-white-background-color {
                background-color: var(--wp--preset--color--white)!important
            }

            .has-pale-pink-background-color {
                background-color: var(--wp--preset--color--pale-pink)!important
            }

            .has-vivid-red-background-color {
                background-color: var(--wp--preset--color--vivid-red)!important
            }

            .has-luminous-vivid-orange-background-color {
                background-color: var(--wp--preset--color--luminous-vivid-orange)!important
            }

            .has-luminous-vivid-amber-background-color {
                background-color: var(--wp--preset--color--luminous-vivid-amber)!important
            }

            .has-light-green-cyan-background-color {
                background-color: var(--wp--preset--color--light-green-cyan)!important
            }

            .has-vivid-green-cyan-background-color {
                background-color: var(--wp--preset--color--vivid-green-cyan)!important
            }

            .has-pale-cyan-blue-background-color {
                background-color: var(--wp--preset--color--pale-cyan-blue)!important
            }

            .has-vivid-cyan-blue-background-color {
                background-color: var(--wp--preset--color--vivid-cyan-blue)!important
            }

            .has-vivid-purple-background-color {
                background-color: var(--wp--preset--color--vivid-purple)!important
            }

            .has-black-border-color {
                border-color: var(--wp--preset--color--black)!important
            }

            .has-cyan-bluish-gray-border-color {
                border-color: var(--wp--preset--color--cyan-bluish-gray)!important
            }

            .has-white-border-color {
                border-color: var(--wp--preset--color--white)!important
            }

            .has-pale-pink-border-color {
                border-color: var(--wp--preset--color--pale-pink)!important
            }

            .has-vivid-red-border-color {
                border-color: var(--wp--preset--color--vivid-red)!important
            }

            .has-luminous-vivid-orange-border-color {
                border-color: var(--wp--preset--color--luminous-vivid-orange)!important
            }

            .has-luminous-vivid-amber-border-color {
                border-color: var(--wp--preset--color--luminous-vivid-amber)!important
            }

            .has-light-green-cyan-border-color {
                border-color: var(--wp--preset--color--light-green-cyan)!important
            }

            .has-vivid-green-cyan-border-color {
                border-color: var(--wp--preset--color--vivid-green-cyan)!important
            }

            .has-pale-cyan-blue-border-color {
                border-color: var(--wp--preset--color--pale-cyan-blue)!important
            }

            .has-vivid-cyan-blue-border-color {
                border-color: var(--wp--preset--color--vivid-cyan-blue)!important
            }

            .has-vivid-purple-border-color {
                border-color: var(--wp--preset--color--vivid-purple)!important
            }

            .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
                background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple)!important
            }

            .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
                background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan)!important
            }

            .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
                background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange)!important
            }

            .has-luminous-vivid-orange-to-vivid-red-gradient-background {
                background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red)!important
            }

            .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
                background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray)!important
            }

            .has-cool-to-warm-spectrum-gradient-background {
                background: var(--wp--preset--gradient--cool-to-warm-spectrum)!important
            }

            .has-blush-light-purple-gradient-background {
                background: var(--wp--preset--gradient--blush-light-purple)!important
            }

            .has-blush-bordeaux-gradient-background {
                background: var(--wp--preset--gradient--blush-bordeaux)!important
            }

            .has-luminous-dusk-gradient-background {
                background: var(--wp--preset--gradient--luminous-dusk)!important
            }

            .has-pale-ocean-gradient-background {
                background: var(--wp--preset--gradient--pale-ocean)!important
            }

            .has-electric-grass-gradient-background {
                background: var(--wp--preset--gradient--electric-grass)!important
            }

            .has-midnight-gradient-background {
                background: var(--wp--preset--gradient--midnight)!important
            }

            .has-small-font-size {
                font-size: var(--wp--preset--font-size--small)!important
            }

            .has-medium-font-size {
                font-size: var(--wp--preset--font-size--medium)!important
            }

            .has-large-font-size {
                font-size: var(--wp--preset--font-size--large)!important
            }

            .has-x-large-font-size {
                font-size: var(--wp--preset--font-size--x-large)!important
            }
        </style>
        <link rel='stylesheet' id='contact-form-7-css' href='https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-css0294821a3249cde6cd359396813767e4cc67c96b1a47a4a4d4c1d966e6615.css' type='text/css' media='all'/>
        <link rel='stylesheet' id='cookie-notice-front-css' href='https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-css384ab84a7b0d66a88922e790c70a39385e85efdd66ec7ece70316ab7d8286.css' type='text/css' media='all'/>
        <link rel='stylesheet' id='fv_flowplayer-css' href='https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-css968386c6eac3631c9975486b0af690512462dc5f04d8aeffa6f9507d705d8.css' type='text/css' media='all'/>
        <link rel='stylesheet' id='math-captcha-frontend-css' href='https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-cssbdbd164fedd80e2a5fb03b936244a8083032de18a1e56ea9e89ea001f92bf.css' type='text/css' media='all'/>
        <link rel='stylesheet' id='addtoany-css' href='https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-cssb2a9761e60635742ef53efa508d74df2a23f4e755334de27775b26f744600.css' type='text/css' media='all'/>
        <style id='addtoany-inline-css' type='text/css' media="all">
            @media screen and (max-width: 180px) {
                .a2a_floating_style.a2a_vertical_style {
                    display:none
                }
            }
        </style>
        <link rel='stylesheet' id='sti-style-css' href='https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-cssf0382425edcfd5b004af76898b050c8e936d4aabbe1e211df5ea88f062825.css' type='text/css' media='all'/>
        <script type="text/javascript" src="https://www.gramvikas.org/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></script>
        <script type="text/javascript" src="https://www.gramvikas.org/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js"></script>
        <script type="text/javascript" defer src="https://www.gramvikas.org/wp-content/plugins/add-to-any/addtoany.min.js?ver=1.1" id="addtoany-jquery-js"></script>
        <script type="text/javascript" id="cookie-notice-front-js-before">
            /* <![CDATA[ */
            var cnArgs = {
                "ajaxUrl": "https:\/\/www.gramvikas.org\/wp-admin\/admin-ajax.php",
                "nonce": "4305152d4d",
                "hideEffect": "slide",
                "position": "bottom",
                "onScroll": false,
                "onScrollOffset": 100,
                "onClick": false,
                "cookieName": "cookie_notice_accepted",
                "cookieTime": 2592000,
                "cookieTimeRejected": 2592000,
                "globalCookie": false,
                "redirection": false,
                "cache": false,
                "revokeCookies": false,
                "revokeCookiesOpt": "automatic"
            };

            //# sourceURL=cookie-notice-front-js-before
            /* ]]> */
        </script>
        <script type="text/javascript" src="https://www.gramvikas.org/wp-content/plugins/cookie-notice/js/front.min.js?ver=2.5.11" id="cookie-notice-front-js"></script>
        <script type="text/javascript" id="sdm-scripts-js-extra">
            /* <![CDATA[ */
            var sdm_ajax_script = {
                "ajaxurl": "https://www.gramvikas.org/wp-admin/admin-ajax.php"
            };
            //# sourceURL=sdm-scripts-js-extra
            /* ]]> */
        </script>
        <script type="text/javascript" src="https://www.gramvikas.org/wp-content/plugins/simple-download-monitor/js/sdm_wp_scripts.js?ver=6.9.4" id="sdm-scripts-js"></script>
        <script type="text/javascript">
            if (typeof jQuery !== 'undefined' && typeof jQuery.migrateWarnings !== 'undefined') {
                jQuery.migrateTrace = true;
                // Habilitar stack traces
                jQuery.migrateMute = false;
                // Garantir avisos no console
            }
            let bill_timeout;

            function isBot() {
                const bots = ['crawler', 'spider', 'baidu', 'duckduckgo', 'bot', 'googlebot', 'bingbot', 'facebook', 'slurp', 'twitter', 'yahoo'];
                const userAgent = navigator.userAgent.toLowerCase();
                return bots.some(bot => userAgent.includes(bot));
            }
            const originalConsoleWarn = console.warn;
            // Armazenar o console.warn original
            const sentWarnings = [];
            const bill_errorQueue = [];
            const slugs = ["antibots", "antihacker", "bigdump-restore", "boatdealer", "cardealer", "database-backup", "disable-wp-sitemap", "easy-update-urls", "hide-site-title", "lazy-load-disable", "multidealer", "real-estate-right-now", "recaptcha-for-all", "reportattacks", "restore-classic-widgets", "s3cloud", "site-checkup", "stopbadbots", "toolsfors", "toolstruthsocial", "wp-memory", "wptools"];

            function hasSlug(warningMessage) {
                return slugs.some(slug => warningMessage.includes(slug));
            }
            // Sobrescrita de console.warn para capturar avisos JQMigrate
            console.warn = function(message, ...args) {
                // Processar avisos JQMIGRATE
                if (typeof message === 'string' && message.includes('JQMIGRATE')) {
                    if (!sentWarnings.includes(message)) {
                        sentWarnings.push(message);
                        let file = 'unknown';
                        let line = '0';
                        try {
                            const stackTrace = new Error().stack.split('\n');
                            for (let i = 1; i < stackTrace.length && i < 10; i++) {
                                const match = stackTrace[i].match(/at\s+.*?\((.*):(\d+):(\d+)\)/) || stackTrace[i].match(/at\s+(.*):(\d+):(\d+)/);
                                if (match && match[1].includes('.js') && !match[1].includes('jquery-migrate.js') && !match[1].includes('jquery.js')) {
                                    file = match[1];
                                    line = match[2];
                                    break;
                                }
                            }
                        } catch (e) {// Ignorar erros
                        }
                        const warningMessage = message.replace('JQMIGRATE:', 'Error:').trim() + ' - URL: ' + file + ' - Line: ' + line;
                        if (!hasSlug(warningMessage)) {
                            bill_errorQueue.push(warningMessage);
                            handleErrorQueue();
                        }
                    }
                }
                // Repassar todas as mensagens para o console.warn original
                originalConsoleWarn.apply(console, [message, ...args]);
            }
            ;
            //originalConsoleWarn.apply(console, arguments);
            // Restaura o console.warn original após 6 segundos
            setTimeout( () => {
                console.warn = originalConsoleWarn;
            }
            , 6000);

            function handleErrorQueue() {
                // Filtrar mensagens de bots antes de processar
                if (isBot()) {
                    bill_errorQueue = [];
                    // Limpar a fila se for bot
                    return;
                }
                if (bill_errorQueue.length >= 5) {
                    sendErrorsToServer();
                } else {
                    clearTimeout(bill_timeout);
                    bill_timeout = setTimeout(sendErrorsToServer, 7000);
                }
            }

            function sendErrorsToServer() {
                if (bill_errorQueue.length > 0) {
                    const message = bill_errorQueue.join(' | ');
                    //console.log('[Bill Catch] Enviando ao Servidor:', message); // Log temporário para depuração
                    const xhr = new XMLHttpRequest();
                    const nonce = '809f27b8b0';
                    const ajax_url = 'https://www.gramvikas.org/wp-admin/admin-ajax.php?action=bill_minozzi_js_error_catched&_wpnonce=809f27b8b0';
                    xhr.open('POST', encodeURI(ajax_url));
                    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    xhr.send('action=bill_minozzi_js_error_catched&_wpnonce=' + nonce + '&bill_js_error_catched=' + encodeURIComponent(message));
                    // bill_errorQueue = [];
                    bill_errorQueue.length = 0;
                    // Limpa o array sem reatribuir
                }
            }
        </script>
        <style type="text/css" media="all">
            .entry-content {
                font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
                font-size: 14px;
                font-weight: 400;
                color: #6B6B6B
            }
        </style>
        <script type='text/javascript'>
            !function(f, b, e, v, n, t, s) {
                if (f.fbq)
                    return;
                n = f.fbq = function() {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                }
                ;
                if (!f._fbq)
                    f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
        </script>
        <script type='text/javascript'>
            var url = window.location.origin + '?ob=open-bridge';
            fbq('set', 'openbridge', '315315612922550', url);
            fbq('init', '315315612922550', {}, {
                "agent": "wordpress-6.9.4-4.1.5"
            })
        </script>
        <script type='text/javascript'>
            fbq('track', 'PageView', []);
        </script>
        <style type="text/css" media="all">
            .recentcomments a {
                display: inline!important;
                padding: 0!important;
                margin: 0!important
            }
        </style>
        <link rel="icon" href="https://www.gramvikas.org/wp-content/uploads/2026/02/cropped-cropped-GV-192x192.png" sizes="192x192"/>
        <style type="text/css" id="wp-custom-css" media="all">
            .logo-color {
                color: #740210!important
            }

            .impact-section p {
                width: 100%!important;
                max-width: 1080px!important
            }

            .news-page .news-content h3 {
                max-width: 100%!important
            }

            .news-page .news-content .what-we-are-hearing-video {
                height: auto!important
            }

            .donation-form-section .selectbox {
                width: 100px
            }

            .flowplayer .fp-splash {
                object-fit: cover!important
            }

            img.fp-splash {
                object-fit: cover!important
            }

            .crowd-s-1 .crowd-s-1-col-1 img {
                width: auto!important
            }

            body.page-id-1167 .amount-sd {
                text-indent: 115px!important
            }

            @media only screen and (max-width: 767px) {
                .what-we-are-hearing-section .what-we-are-hearing-video {
                    width:100%;
                    max-width: 350px;
                    height: 200px!important
                }
            }
        </style>
        <style type="text/css" media="all">
            .flowplayer.skin-slim {
                background-color: #000000!important
            }

            .flowplayer.skin-slim .fp-color,.flowplayer.skin-slim .fp-selected,.fp-playlist-external.skin-slim .fvp-progress {
                background-color: #bb0000!important
            }

            .flowplayer.skin-slim .fp-color-fill .svg-color,.flowplayer.skin-slim .fp-color-fill svg.fvp-icon,.flowplayer.skin-slim .fp-color-fill {
                fill: #bb0000!important;
                color: #bb0000!important
            }

            .flowplayer.skin-slim .fp-controls,.fv-player-buttons a:active,.fv-player-buttons a {
                background-color: transparent!important
            }

            .flowplayer.skin-slim .fp-elapsed,.flowplayer.skin-slim .fp-duration {
                color: #ffffff!important
            }

            .flowplayer.skin-slim .fv-player-video-checker {
                color: #ffffff!important
            }

            .flowplayer.skin-slim .fp-bar span.chapter_passed {
                background-color: #bb0000!important
            }

            .fv-player-buttons a.current {
                background-color: #bb0000!important
            }

            #content .flowplayer.skin-slim,.flowplayer.skin-slim {
                font-family: Tahoma,Geneva,sans-serif
            }

            .flowplayer.skin-slim .fp-dropdown li.active {
                background-color: #bb0000!important
            }

            .flowplayer.skin-youtuby {
                background-color: #000000!important
            }

            .flowplayer.skin-youtuby .fp-color,.flowplayer.skin-youtuby .fp-selected,.fp-playlist-external.skin-youtuby .fvp-progress {
                background-color: #bb0000!important
            }

            .flowplayer.skin-youtuby .fp-color-fill .svg-color,.flowplayer.skin-youtuby .fp-color-fill svg.fvp-icon,.flowplayer.skin-youtuby .fp-color-fill {
                fill: #bb0000!important;
                color: #bb0000!important
            }

            .flowplayer.skin-youtuby .fp-controls,.fv-player-buttons a:active,.fv-player-buttons a {
                background-color: rgba(0,0,0,.5)!important
            }

            .flowplayer.skin-youtuby .fp-elapsed,.flowplayer.skin-youtuby .fp-duration {
                color: #ffffff!important
            }

            .flowplayer.skin-youtuby .fv-player-video-checker {
                color: #ffffff!important
            }

            .flowplayer.skin-youtuby .fv-ab-loop {
                background-color: rgba(0,0,0,.5)!important
            }

            .flowplayer.skin-youtuby .fv_player_popup,.fvfp_admin_error_content {
                background: rgba(0,0,0,.5)
            }

            .flowplayer.skin-youtuby .fp-bar span.chapter_passed {
                background-color: #bb0000!important
            }

            .fv-player-buttons a.current {
                background-color: #bb0000!important
            }

            #content .flowplayer.skin-youtuby,.flowplayer.skin-youtuby {
                font-family: Tahoma,Geneva,sans-serif
            }

            .flowplayer.skin-youtuby .fp-dropdown li.active {
                background-color: #bb0000!important
            }

            .flowplayer.skin-custom {
                margin: 0 auto 2.8em auto;
                display: block
            }

            .flowplayer.skin-custom.has-caption {
                margin: 0 auto
            }

            .flowplayer.skin-custom.fixed-controls,.entry-content .flowplayer.skin-custom.fixed-controls {
                margin-bottom: 5.2em;
                display: block
            }

            .flowplayer.skin-custom.has-abloop,.entry-content .flowplayer.skin-custom.has-abloop {
                margin-bottom: 5.2em
            }

            .flowplayer.skin-custom.fixed-controls.has-abloop,.entry-content .flowplayer.skin-custom.fixed-controls.has-abloop {
                margin-bottom: 5.2em
            }

            .flowplayer.skin-custom {
                background-color: #000000!important
            }

            .flowplayer.skin-custom .fp-color,.flowplayer.skin-custom .fp-selected,.fp-playlist-external.skin-custom .fvp-progress {
                background-color: #bb0000!important
            }

            .flowplayer.skin-custom .fp-color-fill .svg-color,.flowplayer.skin-custom .fp-color-fill svg.fvp-icon,.flowplayer.skin-custom .fp-color-fill {
                fill: #bb0000!important;
                color: #bb0000!important
            }

            .flowplayer.skin-custom .fp-controls,.fv-player-buttons a:active,.fv-player-buttons a {
                background-color: rgba(51,51,51,1)!important
            }

            .flowplayer.skin-custom a.fp-play,.flowplayer.skin-custom a.fp-volumebtn,.flowplayer.skin-custom .fp-controls,.flowplayer.skin-custom .fv-ab-loop,.fv-player-buttons a:active,.fv-player-buttons a {
                color: #eeeeee!important
            }

            .flowplayer.skin-custom .fp-controls>.fv-fp-prevbtn:before,.flowplayer.skin-custom .fp-controls>.fv-fp-nextbtn:before {
                border-color: #eeeeee!important
            }

            .flowplayer.skin-custom .fvfp_admin_error,.flowplayer.skin-custom .fvfp_admin_error a,#content .flowplayer.skin-custom .fvfp_admin_error a {
                color: #eee
            }

            .flowplayer.skin-custom svg.fvp-icon {
                fill: #eeeeee!important
            }

            .flowplayer.skin-custom .fp-volumeslider,.flowplayer.skin-custom .fp-buffer {
                background-color: #eeeeee!important
            }

            .flowplayer.skin-custom .fp-bar span.chapter_buffered {
                background-color: #eeeeee!important
            }

            .flowplayer.skin-custom .fp-elapsed,.flowplayer.skin-custom .fp-duration {
                color: #eeeeee!important
            }

            .flowplayer.skin-custom .fv-player-video-checker {
                color: #eeeeee!important
            }

            .flowplayer.skin-custom .fv-ab-loop {
                background-color: rgba(51,51,51,1)!important
            }

            .flowplayer.skin-custom .fv_player_popup,.fvfp_admin_error_content {
                background: rgba(51,51,51,1)
            }

            .flowplayer.skin-custom .fp-bar span.chapter_passed {
                background-color: #bb0000!important
            }

            .fv-player-buttons a.current {
                background-color: #bb0000!important
            }

            #content .flowplayer.skin-custom,.flowplayer.skin-custom {
                font-family: Tahoma,Geneva,sans-serif
            }

            .flowplayer.skin-custom .fp-dropdown li.active {
                background-color: #bb0000!important
            }

            .wpfp_custom_background {
                display: none;
                position: absolute;
                background-position: center center;
                background-repeat: no-repeat;
                background-size: contain;
                width: 100%;
                height: 100%;
                z-index: 1
            }

            .wpfp_custom_popup {
                position: absolute;
                top: 10%;
                z-index: 20;
                text-align: center;
                width: 100%;
                color: #fff
            }

            .wpfp_custom_popup h1,.wpfp_custom_popup h2,.wpfp_custom_popup h3,.wpfp_custom_popup h4 {
                color: #fff
            }

            .is-finished .wpfp_custom_background {
                display: block
            }

            .wpfp_custom_ad {
                position: absolute;
                bottom: 10%;
                z-index: 20;
                width: 100%
            }

            .wpfp_custom_ad_content {
                background: #fff;
                margin: 0 auto;
                position: relative
            }

            .wpfp_custom_ad {
                color: #888;
                z-index: 20!important
            }

            .wpfp_custom_ad a {
                color: #f33
            }

            .fp-playlist-external>a>span {
                background-color: gray
            }

            .fp-playlist-external>a.is-active>span {
                border-color: #b00
            }

            .fp-playlist-external.fv-playlist-design-2014 a.is-active,.fp-playlist-external.fv-playlist-design-2014 a.is-active h4,.fp-playlist-external.fp-playlist-only-captions a.is-active,.fp-playlist-external.fv-playlist-design-2014 a.is-active h4,.fp-playlist-external.fp-playlist-only-captions a.is-active h4 {
                color: #b00
            }

            .fp-playlist-vertical {
                background-color: gray
            }

            .flowplayer .fp-player .fp-captions p {
                font-size: 16px
            }

            .flowplayer .fp-player .fp-captions p {
                font-family: inherit
            }

            .flowplayer .fp-logo {
                bottom: 30px;
                left: 15px
            }

            .flowplayer .fp-player .fp-captions p {
                background-color: rgba(0,0,0,.5)
            }

            .flowplayer .fp-player.is-sticky {
                max-width: 380px
            }

            @media screen and (max-width: 480px) {
                .flowplayer .fp-player.is-sticky {
                    max-width:100%
                }
            }
        </style>
        <link rel='stylesheet' id='fv_player_lightbox-css' href='https://www.gramvikas.org/wp-content/cache/fvm/min/1770712198-cssf1d8376347f1bb70caf3fbd8391d38f6a612fbdd278c1d642d1f316e21f95.css' type='text/css' media='all'/>
    </head>
    <body data-spy="scroll" data-target=".navbar" class="wp-singular page-template page-template-template page-template-template-our_team page-template-templatetemplate-our_team-php page page-id-314 wp-theme-gramvikas cookies-not-set" data-offset="50">
        <div class="sticky-menu-cover"></div>
        <nav class="navbar navbar-expand-lg main-menu">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <a class="navbar-brand" href="https://www.gramvikas.org">
                            <img src="https://www.gramvikas.org/wp-content/themes/gramvikas/img/GV-logo.png" width="160">
                        </a>
                    </div>
                    <div class="col-md-9">
                        <div class="mobile-search">
                            <input type="text" placeholder="search">
                            <button>submit</button>
                        </div>
                        <a href="javascript:void(0)" class="mobile-search-icon">
                            <img src="https://www.gramvikas.org/wp-content/themes/gramvikas/img/search_icon.svg">
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <img src="https://www.gramvikas.org/wp-content/themes/gramvikas/img/menu_bar.svg">
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown whyus">
                                    <a class="dropdown-toggle" href="#" id="whyus" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Why Us
                            </a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="whyus">
                                        <a class="dropdown-item" href="https://www.gramvikas.org/vision-and-approach/">
                                            Vision & Approach
                                    <p>We envision an equitable and sustainable society where people live in peace with dignity.</p>
                                        </a>
                                        <a class="dropdown-item" href="https://www.gramvikas.org/impact-page/">
                                            Impact
                                    <p>Our work promotes sustainable development processes in rural communities.</p>
                                        </a>
                                        <a class="dropdown-item" href="https://www.gramvikas.org/recognition-page/">
                                            Recognition
                                    <p>Our work has received national and global recognition.</p>
                                        </a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="dropdown-toggle" href="#" id="ourwork" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Our Work
                            </a>
                                    <div class="dropdown-menu ourwork dropdown-menu-right" aria-labelledby="ourwork">
                                        <div class="row ourwork-row">
                                            <div class="col-md-6">
                                                <a class="dropdown-item" href="https://www.gramvikas.org/overview/">
                                                    Overview
                                            <p>Our work responds to the needs of the communities.</p>
                                                </a>
                                            </div>
                                            <div class="col-md-6 d-f">
                                                <a class="dropdown-item" href="https://www.gramvikas.org/decade-five/">
                                                    Decade Five
                                            <p>We aim to enable resilient, dignified lives for five million people by 2030.</p>
                                                </a>
                                            </div>
                                            <div class="col-md-7" style="width: 100%;flex: 0 0 100%;max-width: 100%;">
                                                <a class="dropdown-item" href="javascript:void(0)" style="padding-top: 0">
                                                    <p>Our focus areas are the pillars of work that interact to manage the multidisciplinarity of development problems and their solutions.</p>
                                                </a>
                                            </div>
                                        </div>
                                        <ul class="story-change-list">
                                            <li>
                                                <a href="https://www.gramvikas.org/focus_area/water/">
                                                    <img src="https://www.gramvikas.org/wp-content/themes/gramvikas/img/carousel-img/water_active.svg">
                                                    <span>Water</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.gramvikas.org/focus_area/livelihoods/">
                                                    <img src="https://www.gramvikas.org/wp-content/themes/gramvikas/img/carousel-img/LIVELIHOODS_active.svg">
                                                    <span>Livelihoods</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.gramvikas.org/focus_area/sanitation-hygiene/">
                                                    <img src="https://www.gramvikas.org/wp-content/themes/gramvikas/img/carousel-img/SANITATION_HYGIENE_active.svg" style="margin-bottom: 1px;margin-top: 0;">
                                                    <span>
                                                        Sanitation<br> & Health
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.gramvikas.org/focus_area/habitat-technologies/">
                                                    <img src="https://www.gramvikas.org/wp-content/themes/gramvikas/img/carousel-img/HABITAT_TECH_active.svg" style="margin-top: 2px;">
                                                    <span>
                                                        Habitat &<br>Technology
                                                    </span>
                                                </a>
                                            </li>
                                            <li class="village1">
                                                <a href="https://www.gramvikas.org/focus_area/village-institutions/">
                                                    <img src="https://www.gramvikas.org/wp-content/themes/gramvikas/img/carousel-img/Village_Institutions_active.svg" style="margin-bottom: 15px;margin-top: 15px;">
                                                    <span>Village Institutions</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.gramvikas.org/focus_area/education/">
                                                    <img src="https://www.gramvikas.org/wp-content/themes/gramvikas/img/carousel-img/EDUCATION_active.svg" style="margin-bottom: 13px;margin-top: 2px;">
                                                    <span>
                                                        Education <br>&Youth
                                                    </span>
                                                </a>
                                            </li>
                                            <li class="disa">
                                                <a href="https://www.gramvikas.org/focus_area/disaster-response/">
                                                    <img src="https://www.gramvikas.org/wp-content/themes/gramvikas/img/carousel-img/Disaster_respon_active.svg" width="83">
                                                    <span>Disaster Response</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="dropdown-toggle" href="#" id="aboutus" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About Us
                            </a>
                                    <div class="dropdown-menu ab-blk dropdown-menu-right" aria-labelledby="aboutus">
                                        <ul class="list-unstyled">
                                            <li>
                                                <a class="dropdown-item" href="https://www.gramvikas.org/history-page/">
                                                    History
                                            <p>Our legacy is of enabling rural communities to lead a dignified life.</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="https://www.gramvikas.org/ethos-culture/">
                                                    Ethos & Culture
                                            <p>Our ethos guide our work and shape the culture.</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="https://www.gramvikas.org/our-team/">
                                                    Board & Team
                                            <p>We are driven by our commitment to equity and dignity for all.</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="https://www.gramvikas.org/mandatory-disclosure/">
                                                    Mandatory Disclosure
                                            <p>Audited financial statements and annual activity reports.</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="https://www.gramvikas.org/blog/">
                                                    Blog
                                            <p>Stories and updates from Gram Vikas.</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="https://www.gramvikas.org/library/">
                                                    Library
                                            <p>Research reports, articles and case studies on our work.</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a href="https://www.gramvikas.org/partners/">Partners</a>
                                </li>
                                <li class="nav-item search-blk">
                                    <div>
                                        <input type="text" placeholder="search">
                                    </div>
                                    <a href="javascript:void(0)">
                                        <img src="https://www.gramvikas.org/wp-content/themes/gramvikas/img/search_icon.svg">
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="primary-btn" href="https://www.gramvikas.org/donation-form-1/">Donate</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <style media="all">
            @media only screen and (min-width: 768px) {
                .ab-blk ul {
                    padding-left:10px
                }
            }
        </style>
        <script>
            $(function() {
                $('.search-blk a').click(function() {
                    $('.search-blk').toggleClass('search-open');
                });

                $('.search-blk input').on('keypress', function(e) {
                    if (e.which == 13) {
                        window.location = 'https://www.gramvikas.org/search/?sch=' + $(this).val();
                    }
                });

                $('.mobile-search-icon').click(function() {
                    $('.mobile-search').slideToggle();
                });
                $('.mobile-search button').click(function() {
                    window.location = 'https://www.gramvikas.org/search/?sch=' + $('.mobile-search input').val();
                });

                $('.d-btn').click(function() {
                    console.log($(".n-currency").offset().top);
                    $('html, body').animate({
                        scrollTop: $(".n-currency").offset().top - 80
                    }, 500);
                });
            });
        </script>
        <main class="main-section recognition-page">
            <section class="recognition-heading-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="breadcrumb">
                                <a href="https://www.gramvikas.org">HOME</a>
                                <span>></span>
                                <a href="#">About</a>
                                > board & team
                    
                            </div>
                            <h1 class="section-title">board & team</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="recognition-p-section our-team">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="nav" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active text-uppercase" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Governing Board</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-uppercase" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Management Team</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-uppercase" id="tab-3" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="true">All Teams</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h2>
                                                Our Governing Board sets the strategic direction and ensures<br>that our work remains responsive to community needs. 
                                            </h2>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div style="display:none;">395</div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/1.jpg" width="300">
                                                </div>
                                                <h3>Joe Madiath</h3>
                                                <h4>Chairman</h4>
                                                <p>
                                                    Joe Madiath is the Founder Chairman of Gram Vikas. Since its inception in 1979, till the end of June 2014, Joe has been the Executive Director of Gram Vikas. Today, Gram Vikas is one of the largest NGOs in Odisha, reaching out to over 600,000 people living in over 1700 rural habitations.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-s-1">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-s-1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/1.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Joe Madiath</h3>
                                                                    <h4>Chairman</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Joe Madiath is the Founder Chairman of Gram Vikas. Since its inception in 1979, till the end of June 2014, Joe has been the Executive Director of Gram Vikas. Today, Gram Vikas is one of the largest NGOs in Odisha, reaching out to over 600,000 people living in over 1700 rural habitations.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Joe Madiath is part of the Outstanding Social entrepreneurs selected by the Schwab Foundation for Social Entrepreneurship, Geneva, and Skoll Foundation, USA. In 2005, he was awarded the Social Lifetime Achievement Award for his contribution to improving the plight of the rural masses by “The Godfrey Phillips Red &amp;White Bravery Awards.” In July 2006, Joe Madiath was awarded Doctor of Divinity (Honoris Causa) by the Gurukul Lutheran Theological College, Chennai. In January 2010, Joe Madiath was awarded LOK SAMMAN for the year 2009 for his 40 years of dedicated service in Socio-Economic Development of the Rural poor in Orissa by the ‘Commonman’s Newspaper’, Orissa.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Joe is a founder member of the Voluntary Action Network India (VANI) and the Orissa Development Action Forum (ODAF). He served on the Governing Board of several institutions, including the Council for Advancement of People’s Action and Rural Technologies (CAPART), the Society for Participatory Research in Asia (PRIA), and BASIX. He has been part of various consultative committees of the central and state governments. Joe was the Chairman of the Working Committee on Water and Sanitation for preparing the 12th five-year plan for the Government of India.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Gram Vikas and Joe Madiath have received several national and international awards, including the Alan Shawn Feinstein World Hunger Award for 1995-96 from Brown University, USA; the Dr. K.S. Rao Memorial National Award, 1998 for outstanding Lifetime contribution to the development of new and renewable sources of energy from the Solar Energy Society of India; Kyoto World Water Grand Prize, 2006; Skoll Award for Social Entrepreneurs 2006 by Skoll Foundation, California; the World Habitat Award, 2003 to list a few. In 2006, Joe Madiath was named ‘Water Champion’ by Asian Development Bank.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/2.jpg" width="300">
                                                </div>
                                                <h3>Ananta Mahapatra</h3>
                                                <h4>Member</h4>
                                                <p>
                                                    Ananta Mahapatra is a noted theatre personality from Odisha, a prolific artist and cultural ambassador of the state. Popularly known as the Renaissance Man of Odia Theatre, Ananta has been a jury member of the Indian National Awards, several editions of the India International Film Festival, Indian Panorama, All India Radio Akashvani Awards, and a member of the State and Central Academies for several years. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-1">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/2.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Ananta Mahapatra</h3>
                                                                    <h4>Member</h4>
                                                                    <p>Ananta Mahapatra is a noted theatre personality from Odisha, a prolific artist and cultural ambassador of the state. Popularly known as the Renaissance Man of Odia Theatre, Ananta has been a jury member of the Indian National Awards, several editions of the India International Film Festival, Indian Panorama, All India Radio Akashvani Awards, and a member of the State and Central Academies for several years.</p>
                                                                    <p>He is the founder of the Utkal Rangmanch Trust, set up to revive the professional theatre movement in Odisha. Ananta has been a Chairman and member of the Central Board of Film Certification, Satyajit Ray Film &amp;Television Institute, Regional Institute of Film and Television, Kolkata.</p>
                                                                    <p>He has produced film and television features for National Film Development Corporation, Ministry of Health &amp;Family Welfare, Government of India, including the first feature length film for Doordarshan. Ananta has been an advisor and visiting fellow at INTACH, and a faculty member at IIT Mumbai and Bhubaneswar, National Academy of Broadcasting and Multimedia, and AIR Staff Training Institute. He received an honorary doctorate degree from Ravenshaw University, Cuttack, in 2019.</p>
                                                                    <p>Ananta has been a member of the Gram Vikas Society since 1999.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/3.jpg" width="300">
                                                </div>
                                                <h3>Anup Kumar Mahapatra</h3>
                                                <h4>Member</h4>
                                                <p>
                                                    Anup Kumar Mahapatra is a leading business person and philanthropist from Odisha. He has been a member of Gram Vikas Society since July 2016. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-2">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/3.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Anup Kumar Mahapatra</h3>
                                                                    <h4>Member</h4>
                                                                    <p>Anup Kumar Mahapatra is a leading business person and philanthropist from Odisha. He has been a member of Gram Vikas Society since July 2016.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/4.jpg" width="300">
                                                </div>
                                                <h3>Biren Bhuta</h3>
                                                <h4>Member</h4>
                                                <p>
                                                    Biren’s longest stint has been with Tata Steel, as the Chief of Corporate Social Responsibility. In this capacity, he worked on the whole spectrum of community development in tribal Jharkhand and Odisha. It led him to co-envision a countrywide tribal identity programme, Samvaad, which, to date, remains one of the sub-continent's biggest international indigenous conclaves. The rich output convinced him to co-create a funnelled national Tribal Leadership Programme, yet again a pioneering initiative. He left the company in 2018. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-3">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/4.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Biren Bhuta</h3>
                                                                    <h4>Member</h4>
                                                                    <p>Biren’s longest stint has been with Tata Steel, as the Chief of Corporate Social Responsibility. In this capacity, he worked on the whole spectrum of community development in tribal Jharkhand and Odisha. It led him to co-envision a countrywide tribal identity programme, Samvaad, which, to date, remains one of the sub-continent &#8217;s biggest international indigenous conclaves. The rich output convinced him to co-create a funnelled national Tribal Leadership Programme, yet again a pioneering initiative. He left the company in 2018.</p>
                                                                    <p>He is a core team member of Disom &#8211;The Leadership School, and serves on the Board of several prominent non-profits including SeSTA, Assam, and Bhasha Research and Publication Centre, Gujarat. Biren is a member of the CSR Advisory Council of Tata Metaliks in West Bengal.</p>
                                                                    <p>Biren is an alumnus of the Indian Institute of Management (IIM Calcutta), a fellow of the Management Development Programme from the Ross Business School in Michigan, and a recipient of the Gurukul Fellowship from the Foundation for Universal Responsibility of His Holiness The Dalai Lama.</p>
                                                                    <p>Biren embarked on his career with Standard Chartered in Chennai. Soon, he gave it up to cut his teeth as a broadcast journalist with NDTV, where he reported on business, finance and the economy extensively. He created a series called the India Business Report for BBC and a home series on corporate sustainability called Beyond Business. Previously, Biren has briefly but passionately worked for the conservation of the Olive Ridley sea turtles in Odisha, with the International Union for Conservation of Nature.</p>
                                                                    <p>Biren loves Urdu poetry and Hindustani classical music. He joined the Gram Vikas society in 2019.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/5.jpg" width="300">
                                                </div>
                                                <h3>Debiprasad Mishra</h3>
                                                <h4>Member</h4>
                                                <p>
                                                    Debiprasad Mishra is a Director at the Development Management Institute (DMI), Patna. He has previously served as the Executive Director of Gram Vikas from 2015 to 2017. Debiprasad was a faculty member at the Institute of Rural Management, Anand (IRMA), Gujarat, from 1990 to 2016. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-4">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/5.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Debiprasad Mishra</h3>
                                                                    <h4>Member</h4>
                                                                    <p>Debiprasad Mishra is a Director at the Development Management Institute (DMI), Patna. He has previously served as the Executive Director of Gram Vikas from 2015 to 2017. Debiprasad was a faculty member at the Institute of Rural Management, Anand (IRMA), Gujarat, from 1990 to 2016.</p>
                                                                    <p>He has served several governance and advisory positions including in Corporate Social Responsibility (CSR) Council, Government of Odisha, Affirmative Action Committee, Tata Sponge Iron Limited (TSIL), Strategic Advisory Board, Xavier School of Rural Management, Advisory Committee, Centre for Decentralization and Governance, National Institute of Rural Development (NIRD).</p>
                                                                    <p>Advisory positions with Government of India include roles as member of the Central Steering Committee under the Centrally Sponsored Scheme of Rajiv Gandhi Panchayat Sashaktikaran Abhiyan (RGPSA), Ministry of Panchayati Raj, Working Group on Human Resources for Rural Development, Ministry of Rural Development, Steering Committee on “Voluntary Sector”, Planning Commission, and Task Force on Training Needs for Panchayats, Ministry of Rural Development.</p>
                                                                    <p>Debiprasad has also been on the Governing and Advisory Boards of the Institute of Rural Management Anand (IRMA), Gujarat, Centre for Youth &amp;Social Development (CYSD), Bhubaneswar, Prakriti Foundation, Dahod, Gujarat, UNNATI &#8211;Organisation for Development Support and Education, Ahmedabad, Gujarat, and Centre for Local Governance, PRIA, New Delhi.</p>
                                                                    <p>He is a Fellow in Public Systems Management from IIM Ahmedabad.</p>
                                                                    <p>Debiprasad has been a member of the Gram Vikas Society since 1998.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/6.Meena-Gupta-IAS-Retd.jpg" width="300">
                                                </div>
                                                <h3>Meena Gupta, IAS (Retd.)</h3>
                                                <h4>Member</h4>
                                                <p>
                                                    A retired 1971 Indian Administrative Services officer of Odisha cadre, Meena occupied senior positions in the Government of Odisha and the Government of India in the environment, forests, tribal affairs, labour, and health sectors. She retired as Secretary to the Government of India in the Ministry of Environment and Forests in 2008. Before that, she was the Secretary in the Ministry of Tribal Affairs. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-5">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/6.Meena-Gupta-IAS-Retd.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Meena Gupta, IAS (Retd.)</h3>
                                                                    <h4>Member</h4>
                                                                    <p>A retired 1971 Indian Administrative Services officer of Odisha cadre, Meena occupied senior positions in the Government of Odisha and the Government of India in the environment, forests, tribal affairs, labour, and health sectors. She retired as Secretary to the Government of India in the Ministry of Environment and Forests in 2008. Before that, she was the Secretary in the Ministry of Tribal Affairs.</p>
                                                                    <p>Meena is currently a Member of the Management Committee of the Lepra Society and a Trustee of the Keystone Foundation.</p>
                                                                    <p>She has spent approximately half of her service life in Odisha working for the State Government of Odisha, and half in Delhi, for the government of India. She was also with the ILO Office in Delhi on secondment from the government. After her retirement, Meena served on the Council of the International Union for the Conservation of Nature (IUCN) as Regional Councillor for Asia for four years and on the Board of the IIM, Calcutta.</p>
                                                                    <p>She has been a member of the Gram Vikas Society since July 2016.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/7.jpg" width="300">
                                                </div>
                                                <h3>Namrata Chadha</h3>
                                                <h4>Member</h4>
                                                <p>
                                                    Namrata Chadha is a lawyer by profession and advisor to various nonprofits, public and private institutions. A national and state level awardee for her work on women and child development, she was formerly a member of the Odisha State Commission for Women, and is on the POSH Committee of eight institutions including State Bank of India and Mindtree Technologies. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-6">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/7.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Namrata Chadha</h3>
                                                                    <h4>Member</h4>
                                                                    <p>Namrata Chadha is a lawyer by profession and advisor to various nonprofits, public and private institutions. A national and state level awardee for her work on women and child development, she was formerly a member of the Odisha State Commission for Women, and is on the POSH Committee of eight institutions including State Bank of India and Mindtree Technologies.</p>
                                                                    <p>Namrata is currently a Member of the Accountant General, Odisha. She is associated in various capacities with different organisations, including Committee for Legal Aid to Poor, Mahila Adhikar Abhijan, Vinobha Seva Pratisthan, Gram Utthan, and Maha Bodhi Society of India. She is a Life Member of the Breastfeeding Promotion Network of India, People for Animals, Bar Association of India, Women Power Connect, and a Founder Member of ATSEC, an international organisation working against trafficking of women and children.</p>
                                                                    <p>She joined the Gram Vikas Society in 2019.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/8.Pradosh-Chandra-Mohanty-IRS-Retd.jpg" width="300">
                                                </div>
                                                <h3>Pradosh Chandra Mohanty IRS (Retd.)</h3>
                                                <h4>Member</h4>
                                                <p>
                                                    Pradosh Chandra Mohanty retired as the Chief Commissioner of Income Tax, Andhra Pradesh, in 2018. He joined the Gram Vikas Society in 2019. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-7">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-7" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/8.Pradosh-Chandra-Mohanty-IRS-Retd.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Pradosh Chandra Mohanty IRS (Retd.)</h3>
                                                                    <h4>Member</h4>
                                                                    <p>Pradosh Chandra Mohanty retired as the Chief Commissioner of Income Tax, Andhra Pradesh, in 2018. He joined the Gram Vikas Society in 2019.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/10.jpg" width="300">
                                                </div>
                                                <h3>Sanjeev Nayak</h3>
                                                <h4>Member</h4>
                                                <p>
                                                    Sanjeev Nayak is an entrepreneur having built profitable businesses in information technology, technical education, primary education, hospitality, and renewable energy. He is a Charter Member of TiE, Bhubaneswar Chapter. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-8">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-8" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/10.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sanjeev Nayak</h3>
                                                                    <h4>Member</h4>
                                                                    <p>Sanjeev Nayak is an entrepreneur having built profitable businesses in information technology, technical education, primary education, hospitality, and renewable energy. He is a Charter Member of TiE, Bhubaneswar Chapter.</p>
                                                                    <p>He is a Founding Director and Trustee of the Silicon Institute of Technology, a premier engineering institute in Bhubaneswar, Odisha, the Founding Trustee of the Future Bhubaneswar School, and Member, Governing Body and Management Committee of three D.A.V. Public schools since 2010. Sanjeev is the Treasurer of Open Learning Systems, and Manage Autism Now (MAN), both non-profits for differently abled children in Bhubaneswar, Odisha.</p>
                                                                    <p>Sanjeev is a Director of the STG Chips Pvt. Ltd. engaged in designing products for consumer electronics products, and of Aryans Investa Infrastructure Pvt.Ltd., in the real estate industry in Odisha.</p>
                                                                    <p>In the past, Sanjeev founded Oricom Systems Pvt. Ltd., an IT company providing IT services, marketing, and solutions in Odisha. He has also served as the Founding President of the Information Technology Association of Orissa (ITAO).</p>
                                                                    <p>Sanjeev is a graduate of BITS, Pilani and XIMB. He joined the Gram Vikas Society in July 2016.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/11.jpg" width="300">
                                                </div>
                                                <h3>Veena Joshi</h3>
                                                <h4>Member</h4>
                                                <p>
                                                    Dr. Veena Joshi is an expert in rural energy, renewable energy and environment. She is currently an Expert Member in the Indian Council for Medical Research (ICMR) Taskforce for National LPG Program Assessment and Planning for Health, Member of the Board of Trustees of the Foundation for Medium, Small and Micro Enterprises Clusters, and a Director in the Board of the Small Scale Infrastructure Development Fund (S3IDF), India. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-9">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-9" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/11.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Veena Joshi</h3>
                                                                    <h4>Member</h4>
                                                                    <p>Dr. Veena Joshi is an expert in rural energy, renewable energy and environment. She is currently an Expert Member in the Indian Council for Medical Research (ICMR) Taskforce for National LPG Program Assessment and Planning for Health, Member of the Board of Trustees of the Foundation for Medium, Small and Micro Enterprises Clusters, and a Director in the Board of the Small Scale Infrastructure Development Fund (S3IDF), India.</p>
                                                                    <p>Veena spent more than 30 years of her career with the Swiss Agency for Development and Cooperation (SDC) and TERI, where she developed, managed and guided programmes in the energy sector. She has been on the technical and research Advisory Groups for the UNDP, Shell Foundation, World Bank and Prayas Energy Group. She edited the Journal of Solar Energy Society of India for five years.</p>
                                                                    <p>Veena has a Ph.D. in Physics from Indian Institute of Technology, Kanpur. She joined the Gram Vikas Society in 2019.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="display:none;">408</div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/1-1.jpg" width="300">
                                                </div>
                                                <h3>Liby Johnson</h3>
                                                <h4>Executive Director</h4>
                                                <p>
                                                    Liby Johnson is the Executive Director of Gram Vikas. He has led large-scale, impactful poverty alleviation efforts with nonprofits, multilateral organisations, and government in 25+ years of social development work. Liby regularly contributes to policymaking in the rural drinking water, sanitation, and livelihoods sectors at the national and state levels. In 2019-2020, he served as a member of the National Task Force for the Jal Jeevan Mission, Ministry of Jal Shakti, Government of India. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-s-9">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-s-9" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/1-1.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Liby Johnson</h3>
                                                                    <h4>Executive Director</h4>
                                                                    <p>Liby Johnson is the Executive Director of Gram Vikas. He has led large-scale, impactful poverty alleviation efforts with nonprofits, multilateral organisations, and government in 25+ years of social development work. Liby regularly contributes to policymaking in the rural drinking water, sanitation, and livelihoods sectors at the national and state levels. In 2019-2020, he served as a member of the National Task Force for the Jal Jeevan Mission, Ministry of Jal Shakti, Government of India.</p>
                                                                    <p>Before joining Gram Vikas, Liby was instrumental in setting up the National Resource Organization under Kudumbasree, the poverty eradication mission of the Government of Kerala. He served as its Chief Operating Officer from 2009-2016, leading the efforts to adapt experiences and lessons from Kerala to 10 other Indian States under the National Rural Livelihood Mission.</p>
                                                                    <p>In 2016-2017, Liby spent a year with the United Nations Development Programme (UNDP) as an Expert in Entrepreneurship Promotion between 2016-2017. Between 2006 and 2008, he coordinated the post-Indian Ocean Tsunami reconstruction efforts taken up by the South Indian Federation of Fishermen Societies (SIFFS), a fisher people’s collective in Kerala and Tamil Nadu.</p>
                                                                    <p>A Gram Vikas alumnus, Liby played a critical role in shaping and implementing programmes in rural livelihoods, natural resources management, habitat development, and renewable energy between 1999 and 2005. He coordinated Gram Vikas’ relief, rehabilitation, and reconstruction activities after the 1999 Super Cyclone that ravaged Odisha.</p>
                                                                    <p>Liby’s multi-sectoral experience spans water, sanitation, livelihoods, disaster management, and community institutions. He is an alumnus of the Institute of Rural Management Anand (IRMA).</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row view-more-row">
                                        <div class="col-md-12 text-center" style="margin-top: 20px;">
                                            <a href="javascript:void(0)" class="v-aa">VIEW OUR TEAM</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h2>The Management Team of Gram Vikas supports the Executive Director through programmatic and implementation leadership for different programmes. 

                                    </h2>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/2-1.jpg" width="300">
                                                </div>
                                                <h3>Ambika Prasad</h3>
                                                <h4>Manager, Administration, Procurement &amp;IT</h4>
                                                <p>
                                                    Ambika Prasad is the head of Administration at Gram Vikas. He joined us after 18+ years of successful stints with Tech Mahindra, In2IT, Satyam, and Sanchar. From managing day-to-day operations and security responsibilities to organizing emergency operations, he brings his skills at assessing user needs, implementing process improvements, handling the external project security audits, and developing effective communication and organizational procedures to Gram Vikas. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-10">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-10" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/2-1.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Ambika Prasad</h3>
                                                                    <h4>Manager, Administration, Procurement &amp;IT</h4>
                                                                    <p>Ambika Prasad is the head of Administration at Gram Vikas. He joined us after 18+ years of successful stints with Tech Mahindra, In2IT, Satyam, and Sanchar. From managing day-to-day operations and security responsibilities to organizing emergency operations, he brings his skills at assessing user needs, implementing process improvements, handling the external project security audits, and developing effective communication and organizational procedures to Gram Vikas.</p>
                                                                    <p>Ambika holds a Bachelor of Arts (Economics) from Utkal University.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/08/Benstin-Jenith.B.G.jpg" width="300">
                                                </div>
                                                <h3>Benstin Jenith.B.G.</h3>
                                                <h4>District Manager, Sundargarh District Office</h4>
                                                <p>
                                                    Benstin Jenith.B.G is the District Manager for the Sundargarh District Office, overseeing Gram Vikas’ initiatives in Jharsuguda and Rourkela in Odisha, as well as Gumla in Jharkhand. He also contributes to the Water thematic. He has been with Gram Vikas since September 2021. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-11">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-11" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/08/Benstin-Jenith.B.G.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Benstin Jenith.B.G.</h3>
                                                                    <h4>District Manager, Sundargarh District Office</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Benstin Jenith.B.G is the District Manager for the Sundargarh District Office, overseeing Gram Vikas’ initiatives in Jharsuguda and Rourkela in Odisha, as well as Gumla in Jharkhand. He also contributes to the Water thematic. He has been with Gram Vikas since September 2021. Before this, he worked as a Research Assistant in a socio-psychological study on Diabetes at the Indian Institute of Technology, Hyderabad. Benstin holds a Master of Arts in Development Studies from Tata Institute of Social Sciences, Mumbai, in 2018 and a Bachelor’s in Engineering in Mechanical Engineering from the College of Engineering, Guindy, Chennai, in 2014.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/7-1.jpg" width="300">
                                                </div>
                                                <h3>Biswajit Sahu</h3>
                                                <h4>District Manager, Kandhamal District Office</h4>
                                                <p>
                                                    Biswajit joined Gram Vikas in 2014. He completed his Master’s degree in Social Work from Sambalpur University and worked with CTRAN Consulting, where he promoted farmer-producer companies, agriculture, and horticulture-based livelihoods across Odisha. He joined Gram Vikas in the Odisha Disaster Response Project as a Project Coordinator. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-12">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-12" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/7-1.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Biswajit Sahu</h3>
                                                                    <h4>District Manager, Kandhamal District Office</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Biswajit joined Gram Vikas in 2014. He completed his Master’s degree in Social Work from Sambalpur University and worked with CTRAN Consulting, where he promoted farmer-producer companies, agriculture, and horticulture-based livelihoods across Odisha. He joined Gram Vikas in the Odisha Disaster Response Project as a Project Coordinator.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">From 2020 to 2023, Biswajit led Gram Vikas’ work in the Bargarh, Jharsuguda, and Sundergarh districts of Odisha, as well as the Gumla district of Jharkhand. Currently, he is leading programmes in the Kandhamal district of Odisha.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/8.jpg" width="300">
                                                </div>
                                                <h3>Chandramohan Patnaik</h3>
                                                <h4>Strategic Lead, Finance</h4>
                                                <p>
                                                    Chandramohan Patnaik is the head of finance at Gram Vikas and has been with us since 1998. He is responsible for all statutory compliances, managing the investment funds, and leads the team of internal auditors. Before Gram Vikas, he was with the California Design & Construction India Limited and A K Sharma & Co. in New Delhi. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-13">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-13" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/8.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Chandramohan Patnaik</h3>
                                                                    <h4>Strategic Lead, Finance</h4>
                                                                    <p>Chandramohan Patnaik is the head of finance at Gram Vikas and has been with us since 1998. He is responsible for all statutory compliances, managing the investment funds, and leads the team of internal auditors. Before Gram Vikas, he was with the California Design &amp;Construction India Limited and A K Sharma &amp;Co. in New Delhi.</p>
                                                                    <p>Chandramohan is a trained Inter Cost and Management Accountant. He holds a double Masters in Commerce and Business Administration from Berhampur University. He has a Bachelor of Law (LLB) degree from Lingaraj Law College under Berhampur University.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/10.D.P.jpg" width="300">
                                                </div>
                                                <h3>D.P. Debashis Hota</h3>
                                                <h4>District Manager, Ghumusur District Office and Manager, Human Resources</h4>
                                                <p>
                                                    Debashis Hota is Manager, Human Resources, since 2015.  He ensures a healthy work environment in Gram Vikas by formulating policies and practices for efficient workplace management. He also leads Gram Vikas’ work in the Ghumusur District Office, which covers Odisha's Ganjam and Nayagarh districts. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-14">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-14" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/10.D.P.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>D.P. Debashis Hota</h3>
                                                                    <h4>District Manager, Ghumusur District Office and Manager, Human Resources</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Debashis Hota is Manager, Human Resources, since 2015.  He ensures a healthy work environment in Gram Vikas by formulating policies and practices for efficient workplace management. He also leads Gram Vikas’ work in the Ghumusur District Office, which covers Odisha &#8217;s Ganjam and Nayagarh districts.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Debashis has more than 11 years of experience in administration and personnel management across various companies. Before joining Gram Vikas, he has worked with Nixies Pharmaceuticals and Seashore group managing Human Resources and Administration functions.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">He has an MBA in Human Resource and Marketing from the Biju Patnaik University of Technology, Odisha.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/12.jpg" width="300">
                                                </div>
                                                <h3>Jannatun Begum</h3>
                                                <h4>Thematic Manager, Village Institutions and Sanitation &amp;Health</h4>
                                                <p>
                                                    Jannatun Begum manages the implementation of initiatives to strengthen Village Institutions and Sanitation & Health in partner villages of Gram Vikas. A development professional with 20 years of experience in the capacity building of community institutions, she has a special interest in promoting women and child rights. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-15">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-15" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/12.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Jannatun Begum</h3>
                                                                    <h4>Thematic Manager, Village Institutions and Sanitation &amp;Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Jannatun Begum manages the implementation of initiatives to strengthen village institutions and Sanitation &amp;Health in partner villages of Gram Vikas. A development professional with 20 years of experience in the capacity building of community institutions, she has a special interest in promoting women and child rights.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Before joining us, she worked with Aga Khan Rural Support Programme (AKRSP, India), DISHA, Madhyam Foundation, Antodaya, and other nonprofits in and outside Odisha. </span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Jannatun has a Master in Social Work from Utkal University of Culture, Bhubaneswar.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/jobin.png" width="300">
                                                </div>
                                                <h3>Jobin Chacko</h3>
                                                <h4>District Manager, Gajapati District Office</h4>
                                                <p>
                                                    Jobin joined Gram Vikas in 2018 after completing a Master of Arts in Development from Azim Premji University, Bangalore. As a Young Management Trainee and later as a Junior Manager, he worked on projects aimed at bridging the digital divide in remote rural areas and designing and implementing the Safe and Dignified Migration Programme. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-16">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-16" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/jobin.png" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Jobin Chacko</h3>
                                                                    <h4>District Manager, Gajapati District Office</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Jobin joined Gram Vikas in 2018 after completing a Master of Arts in Development from Azim Premji University, Bangalore. As a Young Management Trainee and later as a Junior Manager, he worked on projects aimed at bridging the digital divide in remote rural areas and designing and implementing the Safe and Dignified Migration Programme.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">From 2022 to 2023, Jobin led Gram Vikas’ work in the Kandhamal district. Currently, he is leading programmes in the Gajapati and Rayagada districts of Odisha.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/16.jpg" width="300">
                                                </div>
                                                <h3>Laxminarayan Panda</h3>
                                                <h4>Thematic Manager, Water</h4>
                                                <p>
                                                    Laxminarayan Panda joined Gram Vikas in 1990 in the Biogas Programme. He completed a Bachelor's in Arts from Berhampur University. Between 1995 and 2019, he worked in the water and sanitation program in several districts of Odisha, including teams in Keonjhar and Gajapati districts. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-17">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-17" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/16.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Laxminarayan Panda</h3>
                                                                    <h4>Thematic Manager, Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Laxminarayan Panda joined Gram Vikas in 1990 in the Biogas Programme. He completed a Bachelor &#8217;s in Arts from Berhampur University. Between 1995 and 2019, he worked in the water and sanitation program in several districts of Odisha, including teams in Keonjhar and Gajapati districts.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">From 2020 to 2023, Laxminarayan Panda led Gram Vikas &#8217;work in Odisha &#8217;s Gajapati and Rayagada districts. He is currently responsible for the implementation of the Water programme at Gram Vikas.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0740-1.jpg" width="300">
                                                </div>
                                                <h3>Lipika Verma</h3>
                                                <h4>Coordinator - Monitoring &amp;Coordinator - ED Office</h4>
                                                <p>
                                                    Lipika Verma has 20 years of experience working in the social development sector. She joined us in 2019 and is working as Coordinator - Monitoring and Coordinator - Executive Director Office in Gram Vikas. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-18">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-18" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0740-1.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Lipika Verma</h3>
                                                                    <h4>Coordinator - Monitoring &amp;Coordinator - ED Office</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Lipika Verma has 20 years of experience working in the social development sector. </span>
                                                                        <span style="font-weight: 400;">She joined us in 2019 and </span>
                                                                        <span style="font-weight: 400;">is working as </span>
                                                                        <span style="font-weight: 400;">Coordinator &#8211;Monitoring and Coordinator &#8211;Executive Director Office in Gram Vikas. Before joining Gram Vikas, she has worked in different organizations in different capacities. She remained Administrative Assistant in the World Health Organisation, Bhubaneswar between 2014 to 2018, Coordinator in Odisha Development Action Forum (ODAF), Bhubaneswar between 2012 to 2014, Assistant Manager &#8211;CSR &amp;R &amp;R in Mandakini Coal Company Limited between 2010 and 2012, CSR Officer in Indian Metals and Ferro Alloys Limited (IMFA) between 2009 and 2010. She holds a Diploma in Finance Management and Accountability from Financial Management Service Foundation in 2009, Master in Bank Management from Utkal University in 1998, and Bachelor of Laws from Utkal University in 2006.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/18.jpg" width="300">
                                                </div>
                                                <h3>Nirmal Chandra Mohanty</h3>
                                                <h4>Programme Manager, Livelihoods and Village Institutions</h4>
                                                <p>
                                                    Nirmal Chandra Mohanty joined Gram Vikas in August 2020 and managed the COVID-19 response and is a part of the Livelihoods and Village Institutions programmes. He brings more than 25 years of experience in watershed development, renewable energy, agriculture in the private, government, and non-government sectors. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-19">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-19" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/18.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Nirmal Chandra Mohanty</h3>
                                                                    <h4>Programme Manager, Livelihoods and Village Institutions</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Nirmal Chandra Mohanty joined Gram Vikas in August 2020 and managed the COVID-19 response and is a part of the Livelihoods and Village Institutions programmes. He brings more than 25 years of experience in watershed development, renewable energy, agriculture in the private, government, and non-government sectors.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Before joining Gram Vikas, he worked with Adhikar, Onergy Solar, International Development Enterprises, India (IDEI), and at the Directorate of Water Management, Government of India.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Nirmal holds an Executive MBA from KIIT University and is a mechanical engineering graduate from The Institution of Engineers (India). </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/21.jpg" width="300">
                                                </div>
                                                <h3>Pratap Chandra Panda</h3>
                                                <h4>Programme Manager, Livelihoods and Sanitation &amp;Health</h4>
                                                <p>
                                                    Pratap Chandra Panda leads the livelihoods and Sanitation & Health initiatives at Gram Vikas. He joined Gram Vikas in 2016 and brings 15 years of extensive experience in managing livelihoods, natural resource management, and climate change projects while serving in organizations like Concern Worldwide, Regional Centre for Development Cooperation, and Living Farms. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-20">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-20" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/21.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Pratap Chandra Panda</h3>
                                                                    <h4>Programme Manager, Livelihoods and Sanitation &amp;Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Pratap Chandra Panda leads the livelihoods and Sanitation &amp;Health initiatives at Gram Vikas. He joined Gram Vikas in 2016 and brings 15 years of extensive experience in managing livelihoods, natural resource management, and climate change projects while serving in organizations like Concern Worldwide, Regional Centre for Development Cooperation, and Living Farms.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">At Gram Vikas, Pratap is responsible for the design, implementation, liaising, facilitation, training, partnership management, and resources management towards ensuring secure and sustainable incomes for rural communities while building the quality of human resources. He also supports teams working on Sanitation &amp;Health.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Pratap has a Masters in Biotechnology from Berhampur University.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/22.jpg" width="300">
                                                </div>
                                                <h3>Ranjan Patnaik</h3>
                                                <h4>Manager, Payments &amp;Budget</h4>
                                                <p>
                                                    Ranjan Patnaik is the Manager for Payments and Budget in Gram Vikas. He began working with Gram Vikas in 2001 and brings 27 years of experience in finance and management. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-21">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-21" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/22.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Ranjan Patnaik</h3>
                                                                    <h4>Manager, Payments &amp;Budget</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Ranjan Patnaik is the Manager for Payments and Budget in Gram Vikas. He began working with Gram Vikas in 2001 and brings 27 years of experience in finance and management.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">At Gram Vikas, he oversees and supervises the project accounts, as well as head office accounts, receipts and payments, audit compliances, verification of expenditure reports, and support in the finalisation of accounts.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Before Gram Vikas, he worked with government and private sector companies in managing accounts and office administration.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/24.jpg" width="300">
                                                </div>
                                                <h3>Sangita Patra</h3>
                                                <h4>Programme Manager, Documentation &amp;Communications and Human Resources</h4>
                                                <p>
                                                    Sangita Patra leads the monitoring, documentation, and communications function at Gram Vikas. She has more than 14 years of experience working in Girls’ Education, Nutrition and Health, Livelihood, and Disaster Response. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-22">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-22" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/24.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sangita Patra</h3>
                                                                    <h4>Programme Manager, Documentation &amp;Communications and Human Resources</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sangita Patra leads the monitoring, documentation, and communications function at Gram Vikas. She has more than 14 years of experience working in Girls’ Education, Nutrition and Health, Livelihood, and Disaster Response.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">She also manages the internship, volunteers, and fellows program in Gram Vikas. In the past, Sangita worked with CARE India and Parivar Seva Sanstha.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sangita holds a Master’s degree in Anthropology from Utkal University, Vani Vihar and a diploma in medical transcription.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/25.jpg" width="300">
                                                </div>
                                                <h3>Sarat Chandra Mohanty</h3>
                                                <h4>District Manager, Ganjam District Office</h4>
                                                <p>
                                                    Sarat joined Gram Vikas in 1991. He has a Bachelor’s in Arts through correspondence from Utkal University, Bhubaneshwar. He worked in programmes related to social forestry, livelihood and in rural water and sanitation projects in several districts of Odisha. A trained Beekeeping Fieldman from Central Bee Institute, Pune, he has trained rural communities in beekeeping as an alternate livelihood option. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-23">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-23" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/25.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sarat Chandra Mohanty</h3>
                                                                    <h4>District Manager, Ganjam District Office</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sarat joined Gram Vikas in 1991. He has a Bachelor’s in Arts through correspondence from Utkal University, Bhubaneshwar. He worked in programmes related to social forestry, livelihood and in rural water and sanitation projects in several districts of Odisha. A trained Beekeeping Fieldman from Central Bee Institute, Pune, he has trained rural communities in beekeeping as an alternate livelihood option.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sarat leads Gram Vikas’ work in the Ganjam district of Odisha.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/11/Sudhir-Ranjan-Sahu.png" width="300">
                                                </div>
                                                <h3>Sudhir Ranjan Sahu</h3>
                                                <h4>Manager, Book keeping &amp;Compliance</h4>
                                                <p>
                                                    Sudhir Ranjan Sahu is the Manager of Bookkeeping and Compliance at Gram Vikas. He joined our team in June 2023. Previously, he has worked in various non-governmental organizations and private companies, including Velstone Tech India Private Limited and Adwell Global Services Private Limited in Berhampur, Kajeriwal & Co., John Thomas & Co. Chartered Accountants, Padhi & Co, and Sabuj Sangha in Kolkata, where he held various roles in account management and office administration. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-24">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-24" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/11/Sudhir-Ranjan-Sahu.png" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sudhir Ranjan Sahu</h3>
                                                                    <h4>Manager, Book keeping &amp;Compliance</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sudhir Ranjan Sahu is the Manager of Bookkeeping and Compliance at Gram Vikas. He joined our team in June 2023. Previously, he has worked in various non-governmental organizations and private companies, including Velstone Tech India Private Limited and Adwell Global Services Private Limited in Berhampur, Kajeriwal &amp;Co., John Thomas &amp;Co. Chartered Accountants, Padhi &amp;Co, and Sabuj Sangha in Kolkata, where he held various roles in account management and office administration. He has a Master of Business Administration in Finance and Human Resources from Sikkim Manipal University and a Bachelor of Commerce from Berhampur University.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/26.jpg" width="300">
                                                </div>
                                                <h3>Sukanta Bhattacharya</h3>
                                                <h4>Strategic Lead, Performance</h4>
                                                <p>
                                                    Sukanta Bhattacharya leads Gram Vikas initiatives under the focus area Strengthening of Village Institutions. He also heads the Staff Development Cell which manages the performance management systems for all employees. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-25">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-25" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/08/26.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sukanta Bhattacharya</h3>
                                                                    <h4>Strategic Lead, Performance</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sukanta Bhattacharya leads Gram Vikas initiatives under the focus area Strengthening of Village Institutions. He also heads the Staff Development Cell which manages the performance management systems for all employees.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">A development professional with more than 25 years of grassroots experience, he has been with Gram Vikas since 2014. In the past, he has worked as a faculty in computer education in different colleges, including those under The Institute of Computer Engineers (India). He has also worked with Lutheran World Service, India, for programmes in Odisha and West Bengal.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sukanta is a Postgraduate diploma in Computer Science and Application from Burdwan University.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/Thomas-Sunil-K-1.jpg" width="300">
                                                </div>
                                                <h3>Thomas Sunil K</h3>
                                                <h4>Junior Manager - Village Institutions and Education &amp;Youth</h4>
                                                <p>
                                                    Thomas Sunil K is a Junior Manager at Gram Vikas, contributing to the Village Institutions and Education & Youth programmes. He has been instrumental in designing and implementing Education and Youth activities which aims at empowering young individuals in rural communities through upskilling, education and cultural engagements. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-26">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-26" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/Thomas-Sunil-K-1.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Thomas Sunil K</h3>
                                                                    <h4>Junior Manager - Village Institutions and Education &amp;Youth</h4>
                                                                    <p>Thomas Sunil K is a Junior Manager at Gram Vikas, contributing to the Village Institutions and Education &amp;Youth programmes. He has been instrumental in designing and implementing Education and Youth activities which aims at empowering young individuals in rural communities through upskilling, education and cultural engagements. Additionally, Thomas supports the Human Resource Development vertical in developing and implementing the Gram Vikas Saathi Fellowship Programme. He has been with Gram Vikas since 2020 and holds an MA in Development from Azim Premji University and a BA in Economics from Sacred Heart College, Kochi.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/varun.png" width="300">
                                                </div>
                                                <h3>Varun Namineni</h3>
                                                <h4>District Manager, Kalahandi District Office</h4>
                                                <p>
                                                    Varun joined Gram Vikas in 2019 as a Young Management Trainee. He has completed Bachelor of Arts in Social Sciences from TISS, Tuljapur and Master of Arts in Development from Azim Premji University, Bangalore. He has worked in the field supporting the Planning Monitoring Documentation and Communication function, coordinating the Migration Profiling of Rayagada Block in Gajapati district and building up the work in Water Quality Management. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-27">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-27" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/varun.png" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Varun Namineni</h3>
                                                                    <h4>District Manager, Kalahandi District Office</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Varun joined Gram Vikas in 2019 as a Young Management Trainee. He has completed Bachelor of Arts in Social Sciences from TISS, Tuljapur and Master of Arts in Development from Azim Premji University, Bangalore. He has worked in the field supporting the Planning Monitoring Documentation and Communication function, coordinating the Migration Profiling of Rayagada Block in Gajapati district and building up the work in Water Quality Management.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Varun leads Gram Vikas’ work in Kalahandi and Balangir districts of Odisha.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row view-more-row">
                                        <div class="col-md-12 text-center" style="margin-top: 20px;">
                                            <a href="javascript:void(0)" class="v-aa">VIEW OUR BOARD</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab-3">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h2>Our team combines a commitment to the communities with expertise, empathy, and hard work to enable the rural poor to live a dignified life.

                                    </h2>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 mt-3">
                                            <h2 class="section-title" style="font-size: 36px;margin-left: 15px;">Programme</h2>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_9745.jpg" width="300">
                                                </div>
                                                <h3>Abhimanyu Nayak</h3>
                                                <h4>Field Expert - Livelihoods</h4>
                                                <p>
                                                    Abhimanyu Nayak joined Gram Vikas in 2017 and has been working as a Field Expert for Livelihoods programme. Previously, he has worked in administration in the Nayagarh Sugar Cooperative Limited. He has a M.A. in Odia from Utkal University. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-28">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-28" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_9745.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Abhimanyu Nayak</h3>
                                                                    <h4>Field Expert - Livelihoods</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Abhimanyu Nayak joined Gram Vikas in 2017 and has been working as a Field Expert for Livelihoods programme. Previously, he has worked in administration in the Nayagarh Sugar Cooperative Limited. He has a M.A. in Odia from Utkal University.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0700.jpg" width="300">
                                                </div>
                                                <h3>Abnaijar Raika</h3>
                                                <h4>Thematic Coordinator - Village Institution </h4>
                                                <p>
                                                    Abnaijar Raika is a Thematic Coordinator for Village Institution programme in Gram Vikas. He joined us in 2019. In the past, he volunteered with us to undertake the Status Assessment Survey to reconnect with all the villages that had set up water and sanitation systems with our assistance. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-29">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-29" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0700.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Abnaijar Raika</h3>
                                                                    <h4>Thematic Coordinator - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Abnaijar Raika is a Thematic Coordinator for Village Institution programme in Gram Vikas. He joined us in 2019. In the past, he volunteered with us to undertake the Status Assessment Survey to reconnect with all the villages that had set up water and sanitation systems with our assistance.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Abnaijar graduated in Master of Arts in Political Science from Dr. B.R. Ambedkar National Degree College, Ramagiri, in Odisha. He has completed a Certificate Program in Rural Livelihood from BRLF-IIHMR University, Jaipur.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/05/Ahalya-Mahananda.jpg" width="300">
                                                </div>
                                                <h3>Ahalya Mahananda</h3>
                                                <h4>Field Expert</h4>
                                                <p>
                                                    Ahalya Mahananda is a Field Expert in the Holistic Rural Development Programme team. In the past, she volunteered with the Gram Vikas’ COVID-19 Response team to conduct household surveys and enable access to social entitlements. She has also worked briefly with Tatwa Technologies in 2015. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-30">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-30" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/05/Ahalya-Mahananda.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Ahalya Mahananda</h3>
                                                                    <h4>Field Expert</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Ahalya Mahananda is a Field Expert in the Holistic Rural Development Programme team. In the past, she volunteered with the Gram Vikas’ COVID-19 Response team to conduct household surveys and enable access to social entitlements. She has also worked briefly with Tatwa Technologies in 2015.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Ahalya completed Matriculation from Panchayat High School, Ambapali, in 2010, and Intermediate in Arts from Tushra College, Tushra, in 2012.  She joined Gram Vikas in 2022.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/08/Akanksha-Awasthi-scaled.jpg" width="300">
                                                </div>
                                                <h3>Akanksha Awasthi</h3>
                                                <h4>Project Manager</h4>
                                                <p>
                                                    Akanksha Awasthi joined Gram Vikas in August 2022. Currently, she works as a Project Manager for the PwC Project and WSGP GPs in Mohana, while also overseeing the MIS of the Rural Creche Initiative. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-33">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-33" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/08/Akanksha-Awasthi-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Akanksha Awasthi</h3>
                                                                    <h4>Project Manager</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Akanksha Awasthi joined Gram Vikas in August 2022. Currently, she works as a Project Manager for the PwC Project and WSGP GPs in Mohana, while also overseeing the MIS of the Rural Creche Initiative. Akanksha holds a Master of Arts in Development from Azim Premji University, Bangalore, and has completed a Bachelor of Science in Biotechnology Research from Shiv Nadar University, Greater Noida, as well as Intermediate in Science from Ann Mary School, Dehradun.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/08/Alex-Sam-Thomas-scaled.jpg" width="300">
                                                </div>
                                                <h3>Alex Sam Thomas</h3>
                                                <h4>Project Manager </h4>
                                                <p>
                                                    Alex Sam Thomas is currently working as Project Manager for the Water Secure Initiative project in Chandaka area of Khordha district.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-34">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-34" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/08/Alex-Sam-Thomas-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Alex Sam Thomas</h3>
                                                                    <h4>Project Manager </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Alex Sam Thomas is currently working as Project Manager for the Water Secure Initiative project in Chandaka area of Khordha district. He is also responsible as Thematic Coordinator for Planning, Monitoring, Documentation, and Communication (PMDC) of Keonjhar District Office. Alex joined Gram Vikas in August 2022. He holds a Master of Arts in Development from Azim Premji University, Bangalore, and an Integrated Master of Science in Physics from </span>
                                                                        <span style="font-weight: 400;">Amrita Vishwa Vidyapeetham, Kollam</span>
                                                                        <span style="font-weight: 400;">.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0670.jpg" width="300">
                                                </div>
                                                <h3>Amarsing Majhi</h3>
                                                <h4>Field Expert - Village Institution </h4>
                                                <p>
                                                    Amarsing Majhi joined Gram Vikas in 2018 and is currently working as a Field Expert for Village Institution focus area. He was a Community Volunteer from 2015 to 2018. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-35">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-35" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0670.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Amarsing Majhi</h3>
                                                                    <h4>Field Expert - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Amarsing Majhi joined Gram Vikas in 2018 and is currently working as a </span>
                                                                        <span style="font-weight: 400;">Field Expert for Village Institution focus area</span>
                                                                        <span style="font-weight: 400;">. He was a Community Volunteer from 2015 to 2018. Before that, he worked with Gram Vikas as Community Service Provider under the Odisha Tribal Empowerment &amp;Livelihoods Programme in the Thuamul Rampur block of Kalahandi district.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Amarsing is currently pursuing B.Tech in Civil Engineering from Biju Patnaik University of Technology, Odisha.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/05/Amit-Kumar-Paikray.jpg" width="300">
                                                </div>
                                                <h3>Amit Kumar Paikray</h3>
                                                <h4>Assistant Lab In-charge</h4>
                                                <p>
                                                    Amit Kumar Paikray is an Assistant Lab In-charge for the Water Quality programme in Gram Vikas. Before joining us, he worked as Lab In-Charge for the Child Feces Management project study undertaken by Emory University for 3 months in 2019 and is experienced in laboratory management and maintenance. He has also worked as a Research Assistant for projects in molecular biology, nanotechnology, and chemical-based synthesis of manganese oxide nanoparticles. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-36">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-36" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/05/Amit-Kumar-Paikray.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Amit Kumar Paikray</h3>
                                                                    <h4>Assistant Lab In-charge</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Amit Kumar Paikray is an Assistant Lab In-charge for the Water Quality programme in Gram Vikas. Before joining us, he worked as Lab In-Charge for the Child Feces Management project study undertaken by Emory University for 3 months in 2019 and is experienced in laboratory management and maintenance. He has also worked as a Research Assistant for projects in molecular biology, nanotechnology, and chemical-based synthesis of manganese oxide nanoparticles.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Amit holds a Bachelor of Science in Biotechnology from Trident Academy of Creative Technology, Bhubaneswar, in 2013, and a Master of Science in Biotechnology from Berhampur University in 2017. He joined us in October 2021.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0158.jpg" width="300">
                                                </div>
                                                <h3>Ananta Kishore Das</h3>
                                                <h4>Divisional Coordinator - Water</h4>
                                                <p>
                                                    Ananta Kishore Das is a Divisional Coordinator for Water at Gram Vikas. An expert in community mobilisation, he has more than a decade of experience working with rural communities in Odisha. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-37">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-37" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0158.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Ananta Kishore Das</h3>
                                                                    <h4>Divisional Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Ananta Kishore Das is a Divisional Coordinator for Water at Gram Vikas. An expert in community mobilisation, he has more than a decade of experience working with rural communities in Odisha. He joined us as a Field Supervisor.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0073.jpg" width="300">
                                                </div>
                                                <h3>Arabinda Nayak</h3>
                                                <h4>Thematic Coordinator - Village Institution </h4>
                                                <p>
                                                    Arabinda Nayak is a Thematic Coordinator for the focus area Village Institution in Gram Vikas. He has more than two decades of experience in water, sanitation, and livelihood programmes. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-39">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-39" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0073.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Arabinda Nayak</h3>
                                                                    <h4>Thematic Coordinator - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Arabinda Nayak is a Thematic Coordinator for the focus area Village Institution in Gram Vikas. He has more than two decades of experience in water, sanitation, and livelihood programmes. He holds an MSW degree from Techno Global University in 2014.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0695.jpg" width="300">
                                                </div>
                                                <h3>Artatrana Sunani</h3>
                                                <h4>Field Expert - Livelihoods </h4>
                                                <p>
                                                    Artatrana Sunani is a Field Expert in Livelihoods at Gram Vikas. Earlier, he worked as a Volunteer for the Status Assessment Survey undertaken to reconnect with all the villages that had set up water and sanitation systems with our assistance. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-40">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-40" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0695.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Artatrana Sunani</h3>
                                                                    <h4>Field Expert - Livelihoods </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Artatrana Sunani is a Field Expert in Livelihoods at Gram Vikas. Earlier, he worked as a Volunteer for the Status Assessment Survey undertaken to reconnect with all the villages that had set up water and sanitation systems with our assistance. He completed Class 12 in Arts from Jay Prakash Mahavidyalaya, Bhawanipatna.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/11/Arun-Kumar-Nayak-scaled.jpg" width="300">
                                                </div>
                                                <h3>Arun Kumar Nayak</h3>
                                                <h4>Thematic Coordinator - Village Institution </h4>
                                                <p>
                                                    Arun Kumar Nayak is a Thematic Coordinator for Village Institution programme at Gram Vikas. He has also worked on water programmes. Before joining Gram Vikas, he was a Supervisor in JPAL for a livelihood project. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-41">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-41" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/11/Arun-Kumar-Nayak-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Arun Kumar Nayak</h3>
                                                                    <h4>Thematic Coordinator - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Arun Kumar Nayak is a Thematic Coordinator for Village Institution programme at Gram Vikas. He has also worked on water programmes. Before joining Gram Vikas, he was a Supervisor in JPAL for a livelihood project. He has a B.A. in pass course (History and Political Science) from Binayak Acharya College, Berhampur University.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0718.jpg" width="300">
                                                </div>
                                                <h3>Aruna Gamango</h3>
                                                <h4>Thematic Coordinator - Sanitation &amp;Health</h4>
                                                <p>
                                                    Aruna Gamango is a Thematic Coordinator in the Sanitation & Health programme at Gram Vikas. He has experience in disaster response to Cyclone Titli, mobilising community members for MGNREGA in cashew plantations, toilet and bathing room repairs, and promoting nutrition gardens. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-42">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-42" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0718.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Aruna Gamango</h3>
                                                                    <h4>Thematic Coordinator - Sanitation &amp;Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Aruna Gamango is a Thematic Coordinator in the Sanitation &amp;Health programme at Gram Vikas. He has experience in disaster response to Cyclone Titli, mobilising community members for MGNREGA in cashew plantations, toilet and bathing room repairs, and promoting nutrition gardens. In the past, he has also volunteered to do surveys for the Status Assessment Survey undertaken to reconnect with all the villages that had set up water and sanitation systems with our assistance.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0083.jpg" width="300">
                                                </div>
                                                <h3>Aruna Kumar Sahu</h3>
                                                <h4>Thematic Coordinator - Water</h4>
                                                <p>
                                                    Aruna Kumar Sahu is a Thematic Coordinator for Water at Gram Vikas. He has been with us for 17 years and is an expert in the construction of toilets and bathing rooms, water tanks, school buildings, and the training of masons.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-43">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-43" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0083.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Aruna Kumar Sahu</h3>
                                                                    <h4>Thematic Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Aruna Kumar Sahu is a Thematic Coordinator for Water at Gram Vikas. He has been with us for 17 years and is an expert in the construction of toilets and bathing rooms, water tanks, school buildings, and the training of masons. He is a trained Barefoot Engineer in construction. He holds a Bachelor of Arts degree from Polasara Science College, Ganjam, Odisha.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/11/Ashish-Kumar-Sabar.jpg" width="300">
                                                </div>
                                                <h3>Ashish Kumar Sabar</h3>
                                                <h4>Field Expert - Water</h4>
                                                <p>
                                                    Ashish Kumar Sabar is a Field Expert for Water programme at Gram Vikas. He has worked as a volunteer doing household and village level surveys under the Status Assessment Survey undertaken to reconnect with all the villages that had set up water and sanitation systems with our assistance. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-44">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-44" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/11/Ashish-Kumar-Sabar.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Ashish Kumar Sabar</h3>
                                                                    <h4>Field Expert - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Ashish Kumar Sabar is a Field Expert for Water programme at Gram Vikas. He has worked as a volunteer doing household and village level surveys under the Status Assessment Survey undertaken to reconnect with all the villages that had set up water and sanitation systems with our assistance. He holds a B.A. in pass course (History, Economics, and Political Science) from Binayak Acharya College, Berhampur.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/10/Asrita-Katta-scaled.jpg" width="300">
                                                </div>
                                                <h3>Asrita Katta</h3>
                                                <h4>Field Level Worker</h4>
                                                <p>
                                                    Asrita Katta is working as a Field Level Worker in Gram Vikas. She joined the organization in April 2022. Asrita has worked as a volunteer with Gram Vikas during 2020. She has completed her intermediate in Arts from Babasaheb Ambedkar Junior College, Khajuripada, in 2019. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-45">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-45" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/10/Asrita-Katta-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Asrita Katta</h3>
                                                                    <h4>Field Level Worker</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Asrita Katta is working as a Field Level Worker in Gram Vikas. </span>
                                                                        <span style="font-weight: 400;">She joined the organization in April 2022. Asrita has worked as a volunteer with Gram Vikas during 2020. She has completed her intermediate in Arts from Babasaheb Ambedkar Junior College, Khajuripada, in 2019.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0704.jpg" width="300">
                                                </div>
                                                <h3>Astina Kumar Raika</h3>
                                                <h4>Thematic Coordinator - Livelihoods</h4>
                                                <p>
                                                    Astina Kumar Raika has been working with Gram Vikas since 2019. He started as a volunteer for the Status Assessment Survey and is now working as a Thematic Coordinator for Livelihoods programme. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-46">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-46" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0704.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Astina Kumar Raika</h3>
                                                                    <h4>Thematic Coordinator - Livelihoods</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Astina Kumar Raika has been working with Gram Vikas since 2019. He started as a volunteer for the Status Assessment Survey and is now working as a Thematic Coordinator for Livelihoods programme. Astina pursued his Bachelor in Arts from Berhampur University in 2018. He also holds a Certificate Program in Rural Livelihood from BRLF-IIHMR University, Jaipur.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0126.jpg" width="300">
                                                </div>
                                                <h3>Babru Bahan Bhoi</h3>
                                                <h4>Thematic Coordinator - Water</h4>
                                                <p>
                                                    Babru Bahan Bhoi has been working with Gram Vikas for 14 years. He is a Thematic Coordinator who has implemented water and sanitation programmes in rural communities of Kalahandi, Ganjam, Jharsuguda and Sundargarh districts of Odisha.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-47">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-47" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0126.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Babru Bahan Bhoi</h3>
                                                                    <h4>Thematic Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Babru Bahan Bhoi has been working with Gram Vikas for 14 years. He is a Thematic Coordinator who has implemented water and sanitation programmes in rural communities of Kalahandi, Ganjam, Jharsuguda and Sundargarh districts of Odisha. Babru has completed his Bachelor of Arts from Sovit University and is currently pursuing Master in Social Work from Kalinga University, Raipur.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0136.jpg" width="300">
                                                </div>
                                                <h3>Bachha Pana</h3>
                                                <h4>Thematic Coordinator - Sanitation &amp;Health</h4>
                                                <p>
                                                    Bachha Pana is the Thematic Coordinator for Sanitation and Health programme at Gram Vikas. He has been with Gram Vikas for 15 years and has gained his expertise in water and sanitation.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-49">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-49" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0136.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Bachha Pana</h3>
                                                                    <h4>Thematic Coordinator - Sanitation &amp;Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bachha Pana is the Thematic Coordinator for </span>
                                                                        <span style="font-weight: 400;">Sanitation and Health</span>
                                                                        <span style="font-weight: 400;">programme at Gram Vikas. He has been with Gram Vikas for 15 years and has gained his expertise in </span>
                                                                        <span style="font-weight: 400;">water and sanitation</span>
                                                                        <span style="font-weight: 400;">. He holds a Masters Degree in Social Work from </span>
                                                                        <span style="font-weight: 400;">Binayak Mission University.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0764.jpg" width="300">
                                                </div>
                                                <h3>Bairagi Karjee</h3>
                                                <h4>Thematic Coordinator - Livelihoods</h4>
                                                <p>
                                                    Bairagi Karjee is a Thematic Coordinator for Livelihoods programme. He has been with Gram Vikas since 2019. He pursued his Intermediate in Arts from DS Mahavidyalaya, Khariaguda, in 2008. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-50">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-50" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0764.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Bairagi Karjee</h3>
                                                                    <h4>Thematic Coordinator - Livelihoods</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bairagi Karjee is a Thematic Coordinator for Livelihoods programme. He has been with Gram Vikas since 2019. He pursued his Intermediate in Arts from </span>
                                                                        <span style="font-weight: 400;">DS Mahavidyalaya, Khariaguda, in 2008</span>
                                                                        <span style="font-weight: 400;">.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0057.jpg" width="300">
                                                </div>
                                                <h3>Banamali Parida</h3>
                                                <h4>Thematic Coordinator - Water</h4>
                                                <p>
                                                    Banamali Parida is working as the Thematic Coordinator for Water. His expertise is in construction of water and sanitation infrastructure in rural villages.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-51">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-51" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0057.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Banamali Parida</h3>
                                                                    <h4>Thematic Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Banamali Parida is working as the Thematic Coordinator for Water. His expertise is in construction of water and sanitation infrastructure in rural villages. He joined Gram Vikas in 1992 and has close to three decades of experience working in social forestry, biogas, and rural housing across Odisha.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0712.jpg" width="300">
                                                </div>
                                                <h3>Basant Naik</h3>
                                                <h4>Thematic Coordinator - Water</h4>
                                                <p>
                                                    Basant Naik is a Thematic Coordinator for the Water Programme at Gram Vikas since 2019. He completed his matriculation from Government (SSD) Boys High School, Gopalpur, Kalahandi district in 2013. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-53">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-53" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0712.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Basant Naik</h3>
                                                                    <h4>Thematic Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Basant Naik is a Thematic Coordinator for the Water Programme at Gram Vikas since 2019. He completed his matriculation from </span>
                                                                        <span style="font-weight: 400;">Government (SSD) Boys High School, Gopalpur, Kalahandi district in 2013.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0171.jpg" width="300">
                                                </div>
                                                <h3>Bibekananda Pradhan</h3>
                                                <h4>Thematic Coordinator - Water</h4>
                                                <p>
                                                    Bibekananda Pradan is the Thematic Coordinator for Water at Gram Vikas and has been with us for 11 years now. He has experience in water and sanitation programmes, livelihoods, and village institutions development in Jharsuguda and Ganjam districts of Odisha. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-57">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-57" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0171.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Bibekananda Pradhan</h3>
                                                                    <h4>Thematic Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bibekananda Pradhan is the Thematic Coordinator for Water at Gram Vikas and has been with us for 11 years now. </span>
                                                                        <span style="font-weight: 400;">He has experience in water and sanitation programmes, livelihoods, and village institutions development in Jharsuguda and Ganjam districts of Odisha.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bibekananda completed his Intermediate in Arts from </span>
                                                                        <span style="font-weight: 400;">Kabi Samrat Upendra Bhanja College, Bhanjanagar in 1997 and has earned a Diploma in Computer Fundamentals from BDPS, Bhanjanagar.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/10/Bibhudas-Gamango-scaled.jpg" width="300">
                                                </div>
                                                <h3>Bibhudas Gamango</h3>
                                                <h4>Field Level Worker</h4>
                                                <p>
                                                    Bibhudas Gamango is working as a Field Level Worker in Gram Vikas since April 2022. He has worked as a volunteer with Gram Vikas during 2020 before joining full time. He has completed his intermediate in Arts from Sri Krushna Chandra Gajapati Autonomous College, Paralakhemundi, in 2017. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-58">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-58" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/10/Bibhudas-Gamango-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Bibhudas Gamango</h3>
                                                                    <h4>Field Level Worker</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bibhudas Gamango is working as a Field Level Worker in Gram Vikas since April 2022. </span>
                                                                        <span style="font-weight: 400;">He has worked as a volunteer with Gram Vikas during </span>
                                                                        <span style="font-weight: 400;">2020 before joining full time. He has completed his intermediate in Arts </span>
                                                                        <span style="font-weight: 400;">from Sri Krushna Chandra Gajapati Autonomous College, Paralakhemundi, in 2017.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0712.jpg" width="300">
                                                </div>
                                                <h3>Bibhuti Patra</h3>
                                                <h4>Field Expert - Sanitation and Health</h4>
                                                <p>
                                                    Bibhuti Patra joined Gram Vikas in 2020 as the Field Expert - Sanitation and Health. He has completed Bachelor of Arts from DadhiBaman Degree College, Bhatli in 2018. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-59">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-59" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0712.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Bibhuti Patra</h3>
                                                                    <h4>Field Expert - Sanitation and Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bibhuti Patra joined Gram Vikas in 2020 as the Field Expert &#8211;Sanitation and Health. He has completed Bachelor of Arts from DadhiBaman Degree College, Bhatli in 2018. Previously, he volunteered with us for the Status Assessment Survey carrying out door to door surveys on water and sanitation infrastructure status in the partner villages for a year.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0655.jpg" width="300">
                                                </div>
                                                <h3>Bidulata Dhal</h3>
                                                <h4>Field Expert - Village Institution </h4>
                                                <p>
                                                    Bidulata Dhal has been working as a Field Expert for Village Institution programme in Gram Vikas for 13 years. She completed her matriculation from Tarago High School in 1987.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-60">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-60" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0655.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Bidulata Dhal</h3>
                                                                    <h4>Field Expert - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bidulata Dhal has been working as a Field Expert for Village Institution programme in Gram Vikas for 13 years. She completed her matriculation from </span>
                                                                        <span style="font-weight: 400;">Tarago High School in 1987. She excels in community mobilisation.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0103.jpg" width="300">
                                                </div>
                                                <h3>Bijay Kumar Sahu</h3>
                                                <h4>Thematic Coordinator - Village Institution </h4>
                                                <p>
                                                    Bijay Kumar Sahu is Thematic Coordinator for Village Institution in Gram Vikas. He has been working with us for 16 years.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-63">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-63" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0103.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Bijay Kumar Sahu</h3>
                                                                    <h4>Thematic Coordinator - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bijay Kumar Sahu is Thematic Coordinator for Village Institution in Gram Vikas. He has been working with us for 16 years. </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0714.jpg" width="300">
                                                </div>
                                                <h3>Bikram Kumar Pradhan</h3>
                                                <h4>Thematic Coordinator - Village Institution </h4>
                                                <p>
                                                    Bikram Kumar Pradhan is the Thematic Coordinator for Village Institution programme at Gram Vikas. He joined us in 2019. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-64">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-64" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0714.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Bikram Kumar Pradhan</h3>
                                                                    <h4>Thematic Coordinator - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bikram Kumar Pradhan is the Thematic Coordinator for Village Institution programme at Gram Vikas. He joined us in 2019.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/10/Binita-Mandal-scaled.jpg" width="300">
                                                </div>
                                                <h3>Binita Mandal</h3>
                                                <h4>Field Level Worker</h4>
                                                <p>
                                                    Binita Mandal is working as a Field Level Worker since April 2022. Before joining full-time, she worked as a volunteer with Gram Vikas during 2020. She completed her Bachelor of Arts with Sanskrit Honours from Ramadevi Women’s University, Bhubaneswar, in 2020. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-65">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-65" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/10/Binita-Mandal-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Binita Mandal</h3>
                                                                    <h4>Field Level Worker</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Binita Mandal is working as a Field Level Worker since April 2022. </span>
                                                                        <span style="font-weight: 400;">Before joining full-time, she worked as a volunteer with Gram Vikas during </span>
                                                                        <span style="font-weight: 400;">2020.</span>
                                                                        <span style="font-weight: 400;">She completed her Bachelor of Arts with Sanskrit Honours from Ramadevi Women’s University, Bhubaneswar, in 2020.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0775.jpg" width="300">
                                                </div>
                                                <h3>Brundabati Sabar</h3>
                                                <h4>Field Expert - Sanitation and Health</h4>
                                                <p>
                                                    Brundabati Sabar is a Field Expert for the Sanitation and Health programme. She has earlier volunteered for Gram Vikas in the Status Assessment Survey doing door to door surveys. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-67">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-67" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0775.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Brundabati Sabar</h3>
                                                                    <h4>Field Expert - Sanitation and Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Brundabati Sabar is a Field Expert for the Sanitation and Health programme. She has earlier volunteered for Gram Vikas in the Status Assessment Survey doing door to door surveys.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0572.jpg" width="300">
                                                </div>
                                                <h3>Buddhadev Deep</h3>
                                                <h4>Thematic Coordinator - Village Institution </h4>
                                                <p>
                                                    Buddhadev Deep is the Thematic Coordinator for Village Institution programme at Gram Vikas. In the past, he has worked with Pratham Foundation as Coordinator for six years. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-68">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-68" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0572.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Buddhadev Deep</h3>
                                                                    <h4>Thematic Coordinator - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Buddhadev Deep is the </span>
                                                                        <span style="font-weight: 400;">Thematic Coordinator for Village Institution programme</span>
                                                                        <span style="font-weight: 400;">at Gram Vikas. In the past, he has worked with Pratham Foundation as Coordinator for six years.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">He completed his Bachelor of Arts from Panchayat Degree College, Ghasian under Sambalpur University in 2012 and Diploma in Community Leadership for Education from IGNOU in 2012.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/10/Buyaja-Dalabehera-scaled.jpg" width="300">
                                                </div>
                                                <h3>Buyaja Dalabehera</h3>
                                                <h4>Field Level Worker</h4>
                                                <p>
                                                    Buyaja Dalabehera is working with Gram Vikas as a Field Level Worker since April 2022. Before joining full-time, he worked as a volunteer in Gram Vikas during 2021. He has done his Bachelor of Arts in Economics from Khallikote Cluster University, Berhampur, in the year 2018. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-70">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-70" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/10/Buyaja-Dalabehera-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Buyaja Dalabehera</h3>
                                                                    <h4>Field Level Worker</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Buyaja Dalabehera is working with Gram Vikas as a Field Level Worker since April 2022. </span>
                                                                        <span style="font-weight: 400;">Before joining full-time, he worked as a volunteer in Gram Vikas during </span>
                                                                        <span style="font-weight: 400;">2021</span>
                                                                        <span style="font-weight: 400;">. He has done his Bachelor of Arts in Economics from Khallikote Cluster University, Berhampur, in the year 2018.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0737.jpg" width="300">
                                                </div>
                                                <h3>Chandra Singh Majhi</h3>
                                                <h4>Thematic Coordinator - Village Institution </h4>
                                                <p>
                                                    Chandra Singh Majhi is the Thematic Coordinator for Village Institution programme at Gram Vikas. He joined us in 2019. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-71">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-71" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0737.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Chandra Singh Majhi</h3>
                                                                    <h4>Thematic Coordinator - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Chandra Singh Majhi is the Thematic Coordinator for Village Institution programme at Gram Vikas. He joined us in 2019.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0085.jpg" width="300">
                                                </div>
                                                <h3>Chhabi Mohanty</h3>
                                                <h4>Thematic Coordinator - Water</h4>
                                                <p>
                                                    Chhabi Mohanty is the Thematic Coordinator for Water at Gram Vikas. She has extensive experience working on water and sanitation projects, community mobilisation and village institutions development. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-72">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-72" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0085.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Chhabi Mohanty</h3>
                                                                    <h4>Thematic Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Chhabi Mohanty is the Thematic Coordinator for Water at Gram Vikas. She has extensive experience working on water and sanitation projects, community mobilisation and village institution development. She completed a Bachelor of Arts degree from Berhampur University.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0724.jpg" width="300">
                                                </div>
                                                <h3>Dalei Mallik</h3>
                                                <h4>Thematic Coordinator - Sanitation &amp;Health</h4>
                                                <p>
                                                    Dalei Mallik is working with Gram Vikas from 2019. He is currently working as Thematic Coordinator for the Sanitation & Health programme. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-73">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-73" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0724.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Dalei Mallik</h3>
                                                                    <h4>Thematic Coordinator - Sanitation &amp;Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Dalei Mallik is working with Gram Vikas from 2019. He is currently working as Thematic Coordinator for the Sanitation &amp;Health programme. He pursued Bachelor of Arts degree in Political Science from Chidananda Saraswati Mahavidyalaya, Bamokoi in 2017. He is very good at community mobilization.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0074.jpg" width="300">
                                                </div>
                                                <h3>Damayanti Das</h3>
                                                <h4>Thematic Coordinator - Village Institution </h4>
                                                <p>
                                                    Damayanti Das is Thematic Coordinator for Village Institution at Gram Vikas with twenty years of experience in total. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-74">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-74" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0074.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Damayanti Das</h3>
                                                                    <h4>Thematic Coordinator - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Damayanti Das is Thematic Coordinator for Village Institution at Gram Vikas with twenty years of experience in total. She has worked with Thread Karani Khordha as a Field Coordinator for five years. She pursued a Bachelor of Arts degree in Social Science from Binayak Mission University in 2005.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/10/Dauda-Sabar-scaled.jpg" width="300">
                                                </div>
                                                <h3>Dauda Sabar</h3>
                                                <h4>Field Level Worker</h4>
                                                <p>
                                                    Dauda Sabar joined Gram Vikas as a Field Level Worker in April 2022. Before joining full-time, he worked as a volunteer with Gram Vikas during 2021. He completed his Bachelor of Arts in Political Science from Indira Memorial College, Chandiput, in 2008. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-75">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-75" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/10/Dauda-Sabar-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Dauda Sabar</h3>
                                                                    <h4>Field Level Worker</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Dauda Sabar joined Gram Vikas as a Field Level Worker in April 2022. Before joining full-time, he worked as a volunteer with Gram Vikas during </span>
                                                                        <span style="font-weight: 400;">2021.</span>
                                                                        <span style="font-weight: 400;">He completed his Bachelor of Arts in Political Science from Indira Memorial College, Chandiput, in 2008.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0145.jpg" width="300">
                                                </div>
                                                <h3>Deepak Kumar Mohanty</h3>
                                                <h4>Thematic Coordinator - Water</h4>
                                                <p>
                                                    Deepak Kumar Mohanty has 12 years of experience in construction of piped water supply systems and sanitation infrastructure in rural communities of Mayurbhanj and Keonjhar. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-76">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-76" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0145.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Deepak Kumar Mohanty</h3>
                                                                    <h4>Thematic Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Deepak Kumar Mohanty has 12 years of experience in construction of piped water supply systems and sanitation infrastructure in rural communities of Mayurbhanj and Keonjhar. Currently, he is working as a Thematic Coordinator for Water in Gram Vikas. He completed Bachelor of Arts from Utkal University in 1987. He is very good at community mobilization and construction supervision.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/11/Duel-Sabar-scaled.jpg" width="300">
                                                </div>
                                                <h3>Deuel Sabar</h3>
                                                <h4>Field Expert - Water Source Sustainability</h4>
                                                <p>
                                                    Deuel Sabar is a Field Expert for Water Source Sustainability programme in Gram Vikas. He joined us in April 2022. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-77">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-77" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/11/Duel-Sabar-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Deuel Sabar</h3>
                                                                    <h4>Field Expert - Water Source Sustainability</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Deuel Sabar is a Field Expert for Water Source Sustainability programme in Gram Vikas. He joined us in April 2022. He holds a Bachelor’s degree in Geography honors from Sriram Degree College, Kashinagar, Gajapati district.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/11/Dharmita-Nayak-scaled.jpg" width="300">
                                                </div>
                                                <h3>Dharmita Nayak</h3>
                                                <h4>Field Expert - Livelihoods </h4>
                                                <p>
                                                    Dharmita Nayak is a Field Expert for Livelihoods programme in Gram Vikas. She joined in April 2022. Previously, Dharmita worked as a volunteer with us for four months. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-78">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-78" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/11/Dharmita-Nayak-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Dharmita Nayak</h3>
                                                                    <h4>Field Expert - Livelihoods </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Dharmita Nayak is a Field Expert for Livelihoods programme in Gram Vikas. She joined in April 2022. Previously, Dharmita worked as a volunteer with us for four months. She completed her Intermediate in Science from Government Junior College, Bhawanipatna in 2019.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0084.jpg" width="300">
                                                </div>
                                                <h3>Dillip Kumar Subudhi</h3>
                                                <h4>Coordinator - VI &amp;RMSG Records</h4>
                                                <p>
                                                    Dillip Kumar Subudhi is a Coordinator for the Village Institutions focus area. He facilitates capacity building and hand holding support to Village Lekha Mitra. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-80">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-80" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0084.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Dillip Kumar Subudhi</h3>
                                                                    <h4>Coordinator - VI &amp;RMSG Records</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Dillip Kumar Subudhi joined </span>
                                                                        <span style="font-weight: 400;">Gram Vikas in 2003 and has been working with us for 17 years. Now, he is positioned as Coordinator for Village Institutions and Resource Mobilisation Support Group Records. He facilitates capacity building and hand-holding support to Village Lekha Mitra. He has served as an Accountant in different project offices. In education, he holds a Master of Social Work from Sam Higginbottom Institute of Agriculture, Technology and Sciences in 2012.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0104.jpg" width="300">
                                                </div>
                                                <h3>Dulhaba Odandra</h3>
                                                <h4>Thematic Coordinator - Water</h4>
                                                <p>
                                                    Dulhaba Odandra works as a Thematic Coordinator for Water in Gram Vikas with 16 years of experience in total.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-82">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-82" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0104.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Dulhaba Odandra</h3>
                                                                    <h4>Thematic Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Dulhaba Odandra works as a </span>
                                                                        <span style="font-weight: 400;">Thematic Coordinator for Water in Gram Vikas with 16 years of experience in total. His expertise is in Watershed Management that he acquired in training from Watershed Organization Trust (WOTR), Pune and training on Groundwater recharge from ACWADAM, Pune. He also has long years of experience in implementation of piped water supply system and sanitation infrastructure, sustainable livelihood, self help groups and community mobilization.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0101.jpg" width="300">
                                                </div>
                                                <h3>Gananath Padhan</h3>
                                                <h4>Field Expert - Water</h4>
                                                <p>
                                                    Gananath Padhan has been working as a Field Expert for Water in Gram Vikas for 16 years now. He pursued an Intermediate from Dunguripali College, Dunguripali in 1996. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-83">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-83" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0101.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Gananath Padhan</h3>
                                                                    <h4>Field Expert - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Gananath Padhan</span>
                                                                        <span style="font-weight: 400;">has been working as a </span>
                                                                        <span style="font-weight: 400;">Field Expert for Water </span>
                                                                        <span style="font-weight: 400;">in Gram Vikas for 16 years now. </span>
                                                                        <span style="font-weight: 400;">He</span>
                                                                        <span style="font-weight: 400;">pursued an Intermediate from Dunguripali College, Dunguripali </span>
                                                                        <span style="font-weight: 400;">in 1996. His expertise is in construction of piped water supply systems and sanitation infrastructure.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0107.jpg" width="300">
                                                </div>
                                                <h3>Gautam Chandra Rout</h3>
                                                <h4>Thematic Coordinator - Village Institution </h4>
                                                <p>
                                                    Gautam Chandra Rout is Thematic Coordinator for Village Institution in Gram Vikas. He has 16 years of experience working with the Adivasi communities of Gajapati and Ganjam districts. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-84">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-84" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0107.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Gautam Chandra Rout</h3>
                                                                    <h4>Thematic Coordinator - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Gautam Chandra Rout is Thematic Coordinator for Village Institution in Gram Vikas. He has 16 years of experience working with the Adivasi communities of Gajapati and Ganjam districts. He holds a Bachelor of Arts degree from Dr. Jadunath College, Rasalpur in 1995 and Master in Social Work from Soviet University in 2002. Before joining full time he volunteered for 5 years in implementing different programmes. He has experience in piped water supply, sanitation and hygiene, watershed, self help group, non-formal education, forest right act, social forestry and rural housing.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/11/Gouri-Karjee-scaled.jpg" width="300">
                                                </div>
                                                <h3>Gouri Karjee</h3>
                                                <h4>Field Expert - Sanitation &amp;Health</h4>
                                                <p>
                                                    Gouri Karjee is a Field Expert for the Sanitation & Health programme in Gram Vikas. He joined in April 2022.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-85">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-85" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/11/Gouri-Karjee-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Gouri Karjee</h3>
                                                                    <h4>Field Expert - Sanitation &amp;Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Gouri Karjee is a Field Expert for the Sanitation &amp;Health programme in Gram Vikas. He joined in April 2022. Prior to joining full-time, Gouri worked with us as a volunteer doing a Status Assessment Survey for a year. She completed her Intermediate in Science from Khallikote Autonomous College, Berhampur, in 2019.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0773.jpg" width="300">
                                                </div>
                                                <h3>Gouri Shankar Sabar</h3>
                                                <h4>Field Expert - Water</h4>
                                                <p>
                                                    Gouri Shankar Sabar is working as Field Expert for Water programme in Gram Vikas joined in 2020. He completed Bachelor in Arts from Indira Memorial College, Chandiput in 2019. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-87">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-87" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0773.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Gouri Shankar Sabar</h3>
                                                                    <h4>Field Expert - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Gouri Shankar Sabar is working as Field Expert for Water programme in Gram Vikas joined in 2020. He completed Bachelor in Arts from Indira Memorial College, Chandiput in 2019.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0647.jpg" width="300">
                                                </div>
                                                <h3>Govind Chik Baraik</h3>
                                                <h4>Field Expert - Village Institution </h4>
                                                <p>
                                                    Govind Chik Baraik is working as Field Expert in Gram Vikas from 2018. He completed his Intermediate in Arts from Kartik College, Gumla in 2004. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-88">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-88" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0647.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Govind Chik Baraik</h3>
                                                                    <h4>Field Expert - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Govind Chik Baraik is working as </span>
                                                                        <span style="font-weight: 400;">Field Expert</span>
                                                                        <span style="font-weight: 400;">in Gram Vikas from 2018. He completed his Intermediate in Arts from Kartik College, Gumla in 2004. He remained Sarpanch of Baghima Gram Panchayat for one term.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/01/Hemant-Naik-scaled.jpg" width="300">
                                                </div>
                                                <h3>Hemant Naik</h3>
                                                <h4>Field Level Worker</h4>
                                                <p>
                                                    Hemant Naik works as a Field Level Worker in Gram Vikas since April 2022. He worked as a volunteer in Gram Vikas before joining full-time. He completed his matriculation from Maa Manikeswari Panchayat Samiti Uchha Madhyamika Vidyalaya, Thuamul Rampur, in 2020. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-89">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-89" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/01/Hemant-Naik-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Hemant Naik</h3>
                                                                    <h4>Field Level Worker</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Hemant Naik works as a Field Level Worker in Gram Vikas since April 2022. </span>
                                                                        <span style="font-weight: 400;">He worked as a volunteer in Gram Vikas before joining full-time. He completed his matriculation from Maa Manikeswari Panchayat Samiti Uchha Madhyamika Vidyalaya, Thuamul Rampur, in 2020.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0482.jpg" width="300">
                                                </div>
                                                <h3>Herman Kerketta</h3>
                                                <h4>Thematic Coordinator - Water</h4>
                                                <p>
                                                    Herman Kerketta is Thematic Coordinator for Water in Gram Vikas. He joined us in 2015. He has served in Indra Women Organization Voluntary Action as Supervisor for 5 years. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-90">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-90" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0482.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Herman Kerketta</h3>
                                                                    <h4>Thematic Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Herman Kerketta is </span>
                                                                        <span style="font-weight: 400;">Thematic Coordinator for Water</span>
                                                                        <span style="font-weight: 400;">in Gram Vikas. He joined us in 2015. He has served in </span>
                                                                        <span style="font-weight: 400;">Indra Women Organization Voluntary Action as Supervisor for 5 years. He completed his Intermediate in Arts from Parshuram Gauntia College, Jarabaga in 1996. He has his expertise in toilet and bathing room construction.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0757.jpg" width="300">
                                                </div>
                                                <h3>Jayanti Raita</h3>
                                                <h4>Thematic Coordinator - Sanitation &amp;Health</h4>
                                                <p>
                                                    Jayanti Raita joined Gram Vikas in 2019 and is currently working as a Thematic Coordinator for Sanitation and Health programme. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-91">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-91" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0757.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Jayanti Raita</h3>
                                                                    <h4>Thematic Coordinator - Sanitation &amp;Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Jayanti Raita joined Gram Vikas in 2019 and is currently working as a </span>
                                                                        <span style="font-weight: 400;">Thematic Coordinator</span>
                                                                        <span style="font-weight: 400;">for Sanitation and Health programme. She has worked in rehabilitation projects for the Cyclone Titli affected communities, WASHplus and Child Feces Management project in Rayagada block of Gajapati district. Before joining full time she has volunteered in the Status Assessment Survey doing community surveys for one year. Jayanti completed Intermediate in Arts from Kalinga Institute of Social Sciences, Bhubaneswar in 2017.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0762.jpg" width="300">
                                                </div>
                                                <h3>Jeebita Bhuyan</h3>
                                                <h4>Field Expert - Sanitation &amp;Health</h4>
                                                <p>
                                                    Jeebita Bhuyan joined Gram Vikas in 2020 and is currently working as a Field Expert for Sanitation & Health programme. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-92">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-92" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0762.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Jeebita Bhuyan</h3>
                                                                    <h4>Field Expert - Sanitation &amp;Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Jeebita Bhuyan joined Gram Vikas in 2020 and is currently working as a </span>
                                                                        <span style="font-weight: 400;">Field Expert for Sanitation &amp;Health programme. She has volunteered for the Status Assessment Survey doing surveys in Gram Vikas partner villages. She pursued Bachelor in Arts from Berhampur University in 2020.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0631.jpg" width="300">
                                                </div>
                                                <h3>Jogindra Dakua</h3>
                                                <h4>Thematic Coordinator - Water Source Sustainability</h4>
                                                <p>
                                                    Jogindra Dakua is a Thematic Coordinator in the Water Source Sustainability programme. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-93">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-93" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0631.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Jogindra Dakua</h3>
                                                                    <h4>Thematic Coordinator - Water Source Sustainability</h4>
                                                                    <p>Jogindra Dakua is a Thematic Coordinator in the Water Source Sustainability programme.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/02/Jyotsnamayee-Padhan-1-scaled.jpg" width="300">
                                                </div>
                                                <h3>Jyotsnamayee Padhan</h3>
                                                <h4>Field Expert - Trainee</h4>
                                                <p>
                                                    Jyotsnamayee Padhan joined Gram Vikas as a Field Expert in January 2022. Before joining Gram Vikas, she worked for six months as a Coordinator in one of the UNDP projects in 2021. She also worked as a Sikshya Prerak in Swakhyara Bharat Project for six years and as a Link Worker in ActionAid for one year.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-95">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-95" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/02/Jyotsnamayee-Padhan-1-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Jyotsnamayee Padhan</h3>
                                                                    <h4>Field Expert - Trainee</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Jyotsnamayee Padhan joined Gram Vikas as a Field Expert in January 2022. Before joining Gram Vikas, she worked for six months as a Coordinator in one of the UNDP projects in 2021. She also worked as a Sikshya Prerak in Swakhyara Bharat Project for six years and as a Link Worker in ActionAid for one year. She completed her Bachelor of Arts from Rajendra College, Balangir, in 2017 and her Intermediate in Arts from Loisingha College, Loisingha, in 2003. She passed the Matriculation exam in 2000 from Sarkari Uchha Prathamika Vidyalaya, Nagaon(B), Balangir.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0132.jpg" width="300">
                                                </div>
                                                <h3>Kali Charan Panda</h3>
                                                <h4>Thematic Coordinator - Water</h4>
                                                <p>
                                                    Kali Charan Panda has been working with Gram Vikas for 13 years and is now positioned as Thematic Coordinator for Water. He pursued a Masters in Social Work from Utkal University of Culture in 2013. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-96">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-96" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0132.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Kali Charan Panda</h3>
                                                                    <h4>Thematic Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Kali Charan Panda has been working with Gram Vikas for 13 years and is now positioned as Thematic Coordinator for Water. He pursued a Masters in Social Work from Utkal University of Culture in 2013. He actively remained part of the National Service Scheme during his student days and also involved himself in voluntary services. His expertise includes government liaisoning and community mobilization.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0129.jpg" width="300">
                                                </div>
                                                <h3>Kalpana Moharana</h3>
                                                <h4>Thematic Coordinator - Village Institution </h4>
                                                <p>
                                                    Kalpana Moharana has 15 years of experience in Gram Vikas. She is working as a Thematic Coordinator for Village Institution programme. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-97">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-97" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0129.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Kalpana Moharana</h3>
                                                                    <h4>Thematic Coordinator - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Kalpana Moharana has 15 years of experience in Gram Vikas. She is working as a Thematic Coordinator for Village Institution programme. </span>
                                                                        <span style="font-weight: 400;">Her expertise is in community mobilization and capacity building of Self Help Groups. </span>
                                                                        <span style="font-weight: 400;">She has completed Bachelor of Science from </span>
                                                                        <span style="font-weight: 400;">Devi Kandal Nityananda College, Eranch.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0677.jpg" width="300">
                                                </div>
                                                <h3>Khageswar Pradhan</h3>
                                                <h4>Field Expert - Livelihoods </h4>
                                                <p>
                                                    Khageswar Pradhan has been working as a Field Expert for Livelihoods programme in Gram Vikas from 2019. He pursued Bachelor of Arts from Shri Jagannath Sanskrit Vishwavidyalaya, Puri in 2013. He has good community motivation skills. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-99">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-99" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0677.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Khageswar Pradhan</h3>
                                                                    <h4>Field Expert - Livelihoods </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Khageswar Pradhan has been working as a </span>
                                                                        <span style="font-weight: 400;">Field Expert for Livelihoods programme in Gram Vikas from 2019. He pursued Bachelor of Arts from Shri Jagannath Sanskrit Vishwavidyalaya, Puri in 2013. He has good community motivation skills.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_9726.jpg" width="300">
                                                </div>
                                                <h3>Kiran Kujur</h3>
                                                <h4>Field Expert - Sanitation &amp;Health</h4>
                                                <p>
                                                    Kiran Kujur joined Gram Vikas in 2018 and is working as a Field Expert. She completed her Intermediate degree from Janbhagidari Higher Secondary School in 2009. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-100">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-100" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_9726.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Kiran Kujur</h3>
                                                                    <h4>Field Expert - Sanitation &amp;Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Kiran Kujur joined Gram Vikas in 2018 and is working as a Field Expert. She completed her Intermediate degree from Janbhagidari Higher Secondary School in 2009. She had been working in the gram panchayat, as Gaon Sakhi. She loves to work with the community.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0148.jpg" width="300">
                                                </div>
                                                <h3>Krishna Chandra Dikshit</h3>
                                                <h4>Project Manager - Livelihoods</h4>
                                                <p>
                                                    Krishna Chandra Dikshit has 12 years of experience in Gram Vikas and is working as a Project Manager for Livelihoods programme. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-101">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-101" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0148.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Krishna Chandra Dikshit</h3>
                                                                    <h4>Project Manager - Livelihoods</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Krishna Chandra Dikshit has 12 years of experience in Gram Vikas and is working as a </span>
                                                                        <span style="font-weight: 400;">Project Manager</span>
                                                                        <span style="font-weight: 400;">for Livelihoods programme. He has experience in construction of toilet and bathing rooms, piped water supply system, implementation of smart community interface, formation and management of Farmer Producer Company and solid waste management. His expertise is working in collective approach and farm livelihood. He holds a Master of Arts in Rural Development from IGNOU in 2014.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/11/Krushna-Chandra-Maharana-scaled.jpg" width="300">
                                                </div>
                                                <h3>Krushna Chandra Maharana</h3>
                                                <h4>Thematic Coordinator - Water</h4>
                                                <p>
                                                    Krushna Chandra Maharana is a Thematic Coordinator for Water in Gram Vikas. He completed his Matriculation from Utkal Vidyapitha, Kharagpur, in 2001. His expertise includes community mobilisation. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-102">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-102" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/11/Krushna-Chandra-Maharana-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Krushna Chandra Maharana</h3>
                                                                    <h4>Thematic Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Krushna Chandra Maharana is a Thematic Coordinator for Water in Gram Vikas. He completed his Matriculation from Utkal Vidyapitha, Kharagpur, in 2001. His expertise includes community mobilisation.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0623.jpg" width="300">
                                                </div>
                                                <h3>Kuna Gochhayata</h3>
                                                <h4>Thematic Coordinator - Village Institution </h4>
                                                <p>
                                                    Kuna Gochhayata is working as a Thematic Coordinator for Village Institution programme in Gram Vikas, joined in 2017. He has worked for Nirman as Village Coordinator for 4 years. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-104">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-104" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0623.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Kuna Gochhayata</h3>
                                                                    <h4>Thematic Coordinator - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Kuna Gochhayata is working as a Thematic Coordinator for Village Institution programme in Gram Vikas, joined in 2017. He has worked for Nirman as Village Coordinator for 4 years. He completed Bachelor of Arts in Sociology from Nayagarh Autonomous College, Nayagarh in 2001.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/10/Lalit-Kumar-Naik.jpg" width="300">
                                                </div>
                                                <h3>Lalit Kumar Naik</h3>
                                                <h4>Field Level Worker</h4>
                                                <p>
                                                    Lalit Kumar Naik works as a Field Level Worker in Gram Vikas since April 2022. Prior to joining full-time, he worked as a volunteer in Gram Vikas during 2021. He completed his Bachelor of Science with Mathematics Honours from Rayagada Autonomous College, Rayagada, in 2021. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-105">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-105" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/10/Lalit-Kumar-Naik.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Lalit Kumar Naik</h3>
                                                                    <h4>Field Level Worker</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Lalit Kumar Naik works as a Field Level Worker in Gram Vikas since April 2022. Prior to joining full-time, </span>
                                                                        <span style="font-weight: 400;">he worked as a volunteer in Gram Vikas during 2021. He completed his Bachelor of Science with Mathematics Honours from Rayagada Autonomous College, Rayagada, in 2021.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0673.jpg" width="300">
                                                </div>
                                                <h3>Manas Ranjan Mund</h3>
                                                <h4>Field Expert - Water</h4>
                                                <p>
                                                    Manas Ranjan Mund has been working as a Field Expert for Water focus area in Gram Vikas since 2018. He has done vocational training in horticulture from Panchayat College, Dharmagarh in 1997.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-107">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-107" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0673.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Manas Ranjan Mund</h3>
                                                                    <h4>Field Expert - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Manas Ranjan Mund has been working as a Field Expert for Water focus area in Gram Vikas since 2018. He has done vocational training in horticulture from Panchayat College, Dharmagarh in 1997. He first joined Gram Vikas in 2007 working for the watershed activities in Kalahandi.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/08/Manjary-S-scaled.jpg" width="300">
                                                </div>
                                                <h3>Manjary S</h3>
                                                <h4>Project Manager </h4>
                                                <p>
                                                    Manjary S is currently working as Project Manager for Project Samruddhi and serves as the Team Leader for the Enterprise Development Resource Group (EDRG) at Gram Vikas. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-109">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-109" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/08/Manjary-S-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Manjary S</h3>
                                                                    <h4>Project Manager </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Manjary S is currently working as Project Manager for Project Samruddhi and serves as the Team Leader for the Enterprise Development Resource Group (EDRG) at Gram Vikas. Previously, she worked with Gram Vikas as an SBI Youth For India fellow during 2020-21. Prior to that, she spent six months as a Project Trainee with the Nutrition and Social Entrepreneurship team at Karnataka Health Promotion Trust, Bangalore.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">She holds a Master of Arts in Social Work (Children &amp;Families) from TISS, Mumbai, obtained in 2019, and a Bachelor of Arts in English Language and Literature from Kerala University, earned in 2016.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Manjary’s primary focus is on women and youth capacity building, as well as project management.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0521.jpg" width="300">
                                                </div>
                                                <h3>Manoj Kumar Swain</h3>
                                                <h4>Divisional Coordinator - Water</h4>
                                                <p>
                                                    Manoj Kumar Swain is Divisional Coordinator in Gram Vikas, joined in 2016. Before joining Gram Vikas, he worked as a Technician cum Supervisor in Indian Oil for sixteen years. He completed his Matriculation from Kutam Chandi Vidyapitha, Baniadiha in 1994. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-110">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-110" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0521.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Manoj Kumar Swain</h3>
                                                                    <h4>Divisional Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Manoj Kumar Swain is Divisional Coordinator in Gram Vikas, joined in 2016. Before joining Gram Vikas, he worked as a Technician cum Supervisor in Indian Oil for sixteen years. He completed his Matriculation from Kutam Chandi Vidyapitha, Baniadiha in 1994.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_9672.jpg" width="300">
                                                </div>
                                                <h3>Mariyanush Kujur</h3>
                                                <h4>Field Expert - Water</h4>
                                                <p>
                                                    Mariyanush Kujur has been working as a Field Expert in Gram Vikas since 2016. He has a total of 10 years of working experience in rural communities. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-111">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-111" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_9672.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Mariyanush Kujur</h3>
                                                                    <h4>Field Expert - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Mariyanush Kujur has been working as a Field Expert in Gram Vikas since 2016. He has a total of 10 years of working experience in rural communities. Before joining Gram Vikas, he was working with PRADAN as Supervisor for 6 years. Mariyanush has good community mobilization skills.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0685.jpg" width="300">
                                                </div>
                                                <h3>Mihir Kumar Bhuyan</h3>
                                                <h4>Thematic Coordinator - Sanitation &amp;Health</h4>
                                                <p>
                                                    Mihir Kumar Bhuyan is working as a Thematic Coordinator for Sanitation & Health programme in Gram Vikas since 2019. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-112">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-112" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0685.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Mihir Kumar Bhuyan</h3>
                                                                    <h4>Thematic Coordinator - Sanitation &amp;Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Mihir Kumar Bhuyan is working as a Thematic Coordinator for Sanitation &amp;Health programme in Gram Vikas since 2019.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0681.jpg" width="300">
                                                </div>
                                                <h3>Monalisa Behera</h3>
                                                <h4>Thematic Coordinator - Sanitation &amp;Health</h4>
                                                <p>
                                                    Monalisa Behera joined the organization in 2018. She is Thematic Coordinator for Sanitation & Health initiatives in Gram Vikas.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-113">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-113" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0681.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Monalisa Behera</h3>
                                                                    <h4>Thematic Coordinator - Sanitation &amp;Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Monalisa Behera joined the organization in 2018. She is Thematic Coordinator for Sanitation &amp;Health initiatives in Gram Vikas. She holds a Masters in Social Work from National Institute of Social Work And Social Sciences, Bhubaneswar in 2019.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/11/Narayan-Pradhan.jpg" width="300">
                                                </div>
                                                <h3>Narayan Pradhan</h3>
                                                <h4>Field Expert - Village Institution </h4>
                                                <p>
                                                    Narayan Pradhan is a Field Expert for Village Institution programme at Gram Vikas. He completed Bachelor of Arts in Sanskrit from Puri University in 2015.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-114">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-114" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/11/Narayan-Pradhan.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Narayan Pradhan</h3>
                                                                    <h4>Field Expert - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Narayan Pradhan is a Field Expert for Village Institution programme at Gram Vikas. He completed Bachelor of Arts in Sanskrit from Puri University in 2015. He is good at community mobilisation, facilitating training and awareness programmes.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0162.jpg" width="300">
                                                </div>
                                                <h3>Narayan Sahu</h3>
                                                <h4>Thematic Coordinator - Livelihoods</h4>
                                                <p>
                                                    Narayan Sahu has a total 12 years of experience in Gram Vikas. He completed his Intermediate in Arts from Sri Jagannath Sanskrit Vishvavidyalaya, Puri in 2010. His expertise includes community mobilization and livelihood. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-115">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-115" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0162.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Narayan Sahu</h3>
                                                                    <h4>Thematic Coordinator - Livelihoods</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Narayan Sahu has a total 12 years of experience in Gram Vikas. He completed his Intermediate in Arts from Sri Jagannath Sanskrit Vishvavidyalaya, Puri in 2010. His expertise includes community mobilization and livelihood.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0612.jpg" width="300">
                                                </div>
                                                <h3>Paikas Toppo</h3>
                                                <h4>Field Expert - Sanitation &amp;Health</h4>
                                                <p>
                                                    Paikas Toppo joined Gram Vikas in 2017 and is working as a Field Expert in Sanitation and Health programme. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-119">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-119" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0612.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Paikas Toppo</h3>
                                                                    <h4>Field Expert - Sanitation &amp;Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Paikas Toppo joined Gram Vikas in 2017 and is working as a Field Expert in Sanitation and Health programme.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0179.jpg" width="300">
                                                </div>
                                                <h3>Parakhita Nayak</h3>
                                                <h4>Thematic Coordinator - Village Institution </h4>
                                                <p>
                                                    Parakhita Nayak joined Gram Vikas in 2013 as Supervisor and currently working as Thematic Coordinator for Village Institution programme.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-120">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-120" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0179.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Parakhita Nayak</h3>
                                                                    <h4>Thematic Coordinator - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Parakhita Nayak joined Gram Vikas in 2013 as Supervisor and currently working as Thematic Coordinator for Village Institution programme. He completed Intermediate in Arts from Nabajyoti College, Jyotinagar, Chakarkend in 2002.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0075.jpg" width="300">
                                                </div>
                                                <h3>Paramananda Sethi</h3>
                                                <h4>Field Expert - Water</h4>
                                                <p>
                                                    Paramananda Sethi has 20 years of experience working with the rural communities in Odisha. He is Field Expert in Gram Vikas and is currently looking after the implementation of water and sanitation programmes in Baliguda, Kandhamal district. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-121">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-121" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0075.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Paramananda Sethi</h3>
                                                                    <h4>Field Expert - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Paramananda Sethi has 20 years of experience working with the rural communities in Odisha. He is a Field Expert in Gram Vikas and is currently looking after the implementation of water and sanitation programmes in </span>
                                                                        <span style="font-weight: 400;">Baliguda, Kandhamal district</span>
                                                                        <span style="font-weight: 400;">. He pursued a Bachelor of Arts in Sanskrit from Utkal University in 1994. He has certificates in Training of Masons and Barefoot Engineering in Civil. His expertise is in supervising the construction of household toilets &amp;bathing rooms, and community water tanks.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0137.jpg" width="300">
                                                </div>
                                                <h3>Parsuram Palli</h3>
                                                <h4>Field Expert - Water</h4>
                                                <p>
                                                    Parsuram Palli has been working for 13 years now as a Field Expert for Water in Gram Vikas. He completed his Matriculation from Nandapur High School in 1992. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-122">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-122" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0137.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Parsuram Palli</h3>
                                                                    <h4>Field Expert - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Parsuram Palli has been working for 13 years now as a Field Expert for Water in Gram Vikas. He completed his Matriculation from Nandapur High School in 1992.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0700.jpg" width="300">
                                                </div>
                                                <h3>Pinyas Gamango</h3>
                                                <h4>Field Expert - Water</h4>
                                                <p>
                                                    Pinyas Gamango joined Gram Vikas in 2019 and is working as a Field Expert for Water programme. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-123">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-123" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0700.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Pinyas Gamango</h3>
                                                                    <h4>Field Expert - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Pinyas Gamango joined Gram Vikas in 2019 and is working as a Field Expert for Water programme.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0776.jpg" width="300">
                                                </div>
                                                <h3>Prasanta Kumar Nayak</h3>
                                                <h4>Field Expert - Water</h4>
                                                <p>
                                                    Prasanta Kumar Nayak joined Gram Vikas in 2020. He is working as a Field Expert in Water thematic area. He pursued Intermediate in Arts from Anchalika Degree College, Jagannathprasad in 2008. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-128">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-128" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0776.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Prasanta Kumar Nayak</h3>
                                                                    <h4>Field Expert - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Prasanta Kumar Nayak joined Gram Vikas in 2020. He is working as a Field Expert in Water thematic area. He pursued Intermediate in Arts from Anchalika Degree College, Jagannathprasad in 2008. He has been part of one of the RCDC projects and Pratham Odisha in 2006. His expertise includes community mobilization, and awareness generation.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0697.jpg" width="300">
                                                </div>
                                                <h3>Prasanta Kumar Sahu</h3>
                                                <h4>Thematic Coordinator - Water</h4>
                                                <p>
                                                    Prasanta Kumar Sahu is working as a Thematic Coordinator for Water focus area in Gram Vikas. He joined the organization in 2019. He completed Bachelor of Arts from Pabitra Mohan Memorial Degree College, Rengali, in 2018. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-129">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-129" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0697.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Prasanta Kumar Sahu</h3>
                                                                    <h4>Thematic Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Prasanta Kumar Sahu is working as a Thematic Coordinator for Water focus area in Gram Vikas. He joined the organization in 2019. He completed Bachelor of Arts from Pabitra Mohan Memorial Degree College, Rengali, in 2018. He has undergone a training on Management and Governance of Groundwater from ACWADAM, Pune in 2019.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0770.jpg" width="300">
                                                </div>
                                                <h3>Puspanjali Bhuyan</h3>
                                                <h4>Field Expert - Water</h4>
                                                <p>
                                                    Puspanjali Bhuyan joined Gram Vikas in 2020 and is working as a Field Expert for Water programme. She completed Intermediate in Arts from Sanskrit College, Khariaguda in 2019. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-132">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-132" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0770.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Puspanjali Bhuyan</h3>
                                                                    <h4>Field Expert - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Puspanjali Bhuyan joined Gram Vikas in 2020 and is working as a Field Expert for Water programme. She completed Intermediate in Arts from Sanskrit College, Khariaguda in 2019.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0769.jpg" width="300">
                                                </div>
                                                <h3>Rajani Karjee</h3>
                                                <h4>Field Expert - Water</h4>
                                                <p>
                                                    Rajani Karjee is Field Expert - Water in Gram Vikas, joined in 2020. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-134">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-134" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0769.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Rajani Karjee</h3>
                                                                    <h4>Field Expert - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Rajani Karjee is Field Expert &#8211;Water in Gram Vikas, joined in 2020.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0748.jpg" width="300">
                                                </div>
                                                <h3>Rushi Mallick</h3>
                                                <h4>Field Expert - Water</h4>
                                                <p>
                                                    Rushi Mallick has been working as a Field Expert in Gram Vikas since 2017. He supervises the construction of water and sanitation infrastructure, mobilizes the community, facilitates training and creates awareness. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-138">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-138" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0748.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Rushi Mallick</h3>
                                                                    <h4>Field Expert - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Rushi Mallick has been working as a Field Expert in Gram Vikas since 2017. He supervises the construction of water and sanitation infrastructure, mobilizes the community, facilitates training and creates awareness. He completed Matriculation from Government High School, Barakhama in 2010. Rushi has five and a half years of work experience. He has worked in a call centre in Kolkata before joining Gram Vikas.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0135.jpg" width="300">
                                                </div>
                                                <h3>Sabitri Ojha</h3>
                                                <h4>Thematic Coordinator - Sanitation &amp;Health</h4>
                                                <p>
                                                    Sabitri Ojha has 15 years of experience in Gram Vikas. She is Thematic Coordinator for the Sanitation and Health programme. In education, she pursued a Bachelor of Arts from Utkal University in 2000. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-139">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-139" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0135.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sabitri Ojha</h3>
                                                                    <h4>Thematic Coordinator - Sanitation &amp;Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sabitri Ojha has 15 years of experience in Gram Vikas. She is Thematic Coordinator for the </span>
                                                                        <span style="font-weight: 400;">Sanitation and Health</span>
                                                                        <span style="font-weight: 400;">programme. In education, </span>
                                                                        <span style="font-weight: 400;">she pursued a Bachelor of Arts from Utkal University in 2000.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0652.jpg" width="300">
                                                </div>
                                                <h3>Sachin Gurung</h3>
                                                <h4>Thematic Coordinator - Water</h4>
                                                <p>
                                                    Sachin Gurung joined Gram Vikas in 2018. He is now serving as Thematic Coordinator for the Water programme. He has a total experience of 10 years in livelihood activities and watershed management. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-140">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-140" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0652.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sachin Gurung</h3>
                                                                    <h4>Thematic Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sachin Gurung joined Gram Vikas in 2018. He is now serving as Thematic Coordinator for the Water programme. He has a total experience of 10 years in livelihood activities and watershed management. Before joining Gram Vikas, he served as a Project Coordinator in</span>
                                                                        <span style="font-weight: 400;">Hill Social Welfare Society, Kalimpong from 2015 to 2018 and as Coordinator in Kalimpong Krishak Kalyan Sangathan from 2010 to 2012. Between 2013 and 2015, he was with Gram Vikas as Junior Coordinator for the Integrated Tribal Development Programme in Tumba, Ganjam district. In terms of education, he pursued Bachelor of Science from North Bengal University in 1990, Certificate in Rural Development from IGNOU in 2011, Entrepreneurship Skill Development Programme from Indian Institute of Entrepreneurship, Assam in 2010.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0077.jpg" width="300">
                                                </div>
                                                <h3>Sanjay Kumar Baral</h3>
                                                <h4>Thematic Coordinator - Livelihoods</h4>
                                                <p>
                                                    Sanjay Kumar Baral is 22 years experienced working with rural communities. He is now Thematic Coordinator for Livelihoods in Gram Vikas. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-142">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-142" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0077.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sanjay Kumar Baral</h3>
                                                                    <h4>Thematic Coordinator - Livelihoods</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sanjay Kumar Baral is 22 years experienced working with rural communities. He is now Thematic Coordinator for Livelihoods in Gram Vikas. Earlier he has worked with CTxGreen as Supervisor in agriculture livelihoods for 4 years. He completed Bachelor of Arts from Utkal University in 1997.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/11/Santosh-Kumar-Padhy-scaled.jpg" width="300">
                                                </div>
                                                <h3>Santosh Kumar Padhy</h3>
                                                <h4>Thematic Coordinator - Village Institution </h4>
                                                <p>
                                                    Santosh Kumar Padhy is a Thematic Coordinator for the Village Institution programme at Gram Vikas. He completed Bachelor of Arts from Nuvapada Sri Balaji Mahavidyalaya College, Nuvapada in 1998. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-143">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-143" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/11/Santosh-Kumar-Padhy-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Santosh Kumar Padhy</h3>
                                                                    <h4>Thematic Coordinator - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Santosh Kumar Padhy is a Thematic Coordinator for the Village Institution programme at Gram Vikas. He completed Bachelor of Arts from Nuvapada Sri Balaji Mahavidyalaya College, Nuvapada in 1998.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0111.jpg" width="300">
                                                </div>
                                                <h3>Santosh Kumar Patra</h3>
                                                <h4>Thematic Coordinator - Village Institution </h4>
                                                <p>
                                                    Santosh Kumar Patra has 18 years of experience working with rural communities in Odisha and Jharkhand. He is working as a Thematic Coordinator for Village Institution programme. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-144">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-144" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0111.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Santosh Kumar Patra</h3>
                                                                    <h4>Thematic Coordinator - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Santosh Kumar Patra has 18 years of experience working with rural communities in Odisha and Jharkhand. He is working as a Thematic Coordinator for Village Institution programme. He pursued Master of Arts from Berhampur University in 1998. His expertise includes community motivation and construction.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0771.jpg" width="300">
                                                </div>
                                                <h3>Sarita Majhi</h3>
                                                <h4>Field Expert - Livelihoods </h4>
                                                <p>
                                                    Sarita Majhi joined Gram Vikas in 2020 and is working as a Field Expert for Livelihoods programme. She completed Matriculation from Government High School, Gunupur in 2019. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-146">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-146" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0771.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sarita Majhi</h3>
                                                                    <h4>Field Expert - Livelihoods </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sarita Majhi joined Gram Vikas in 2020 and is working as a Field Expert for Livelihoods programme. She completed Matriculation from Government High School, Gunupur in 2019.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/02/Sasmita-Jena-scaled.jpg" width="300">
                                                </div>
                                                <h3>Sasmita Jena</h3>
                                                <h4>Thematic Coordinator - Livelihoods</h4>
                                                <p>
                                                    Sasmita Jena works as a Thematic Coordinator in the Livelihoods programme. She has been with Gram Vikas for 12 years now. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-147">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-147" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/02/Sasmita-Jena-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sasmita Jena</h3>
                                                                    <h4>Thematic Coordinator - Livelihoods</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sasmita Jena works as a Thematic Coordinator in the Livelihoods programme. She has been with Gram Vikas for 12 years now. She is involved in community mobilization, facilitating training and awareness programmes on health and hygiene for adolescent girls and Self Help Groups. She has a Master of Business Administration in Human Resources degree from Biju Patnaik University of Technology, completed in 2017.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/01/Sebin-Mathew-scaled.jpg" width="300">
                                                </div>
                                                <h3>Sebin Mathew</h3>
                                                <h4>Project Manager </h4>
                                                <p>
                                                    Sebin Mathew is a Project Manager for the Rural Livelihood Project and Community-led Ecological Restoration for Sustainable Development with the Clean Development Mechanism (CDM) Approach project in Sorada and Daringbadi.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-148">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-148" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/01/Sebin-Mathew-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sebin Mathew</h3>
                                                                    <h4>Project Manager </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sebin Mathew is a Project Manager for the Rural Livelihood Project and Community-led Ecological Restoration for Sustainable Development with the Clean Development Mechanism (CDM) Approach project in Sorada and Daringbadi. She joined us in August 2022. Sebin completed her Post Graduation in Development in 2022 from Azim Premji University, Bangalore, and a Bachelor &#8217;s in Economics from Assumption College, Mahatma Gandhi University, Kottayam in 2018.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_9719.jpg" width="300">
                                                </div>
                                                <h3>Shanti Kujur</h3>
                                                <h4>Field Expert - Sanitation &amp;Health</h4>
                                                <p>
                                                    Shanti Kujur works as a Field Expert in Sanitation & Health programme. Her work is to promote nutrition gardening, health and hygiene behavior in the communities.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-149">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-149" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_9719.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Shanti Kujur</h3>
                                                                    <h4>Field Expert - Sanitation &amp;Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Shanti Kujur works as a Field Expert in Sanitation &amp;Health programme. Her work is to promote nutrition gardening, health and hygiene behavior in the communities. She joined Gram Vikas in 2018. Shanti completed her Intermediate in Arts from S.S High School, Gumla, in 2008.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0608.jpg" width="300">
                                                </div>
                                                <h3>Shivtahal Singh</h3>
                                                <h4>Supervisor</h4>
                                                <p>
                                                    Shivtahal Singh is a Supervisor with Gram Vikas. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-150">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-150" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0608.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Shivtahal Singh</h3>
                                                                    <h4>Supervisor</h4>
                                                                    <p>Shivtahal Singh is a Supervisor with Gram Vikas.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0729.jpg" width="300">
                                                </div>
                                                <h3>Siba Kumbhar</h3>
                                                <h4>Field Expert - Sanitation &amp;Health</h4>
                                                <p>
                                                    Siba Kumbhar is a Field Expert in Sanitation & Health programme at Gram Vikas. He pursued Intermediate in Arts from Radhakrushna Adivasi Mahavidyalaya, Dasamantapur in 2011. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-152">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-152" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0729.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Siba Kumbhar</h3>
                                                                    <h4>Field Expert - Sanitation &amp;Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Siba Kumbhar is a Field Expert in Sanitation &amp;Health programme at Gram Vikas. He pursued Intermediate in Arts from Radhakrushna Adivasi Mahavidyalaya, Dasamantapur in 2011.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0086.jpg" width="300">
                                                </div>
                                                <h3>Sitaram Mohanty</h3>
                                                <h4>Thematic Coordinator - Water</h4>
                                                <p>
                                                    Sitaram Mohanty has more than 17 years of experience. He is working as a Thematic Coordinator for Water. He completed Bachelor of Arts from Berhampur University in 1971. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-154">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-154" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0086.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sitaram Mohanty</h3>
                                                                    <h4>Thematic Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sitaram Mohanty has more than 17 years of experience. He is working as a Thematic Coordinator for Water. He completed Bachelor of Arts from Berhampur University in 1971.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0575.jpg" width="300">
                                                </div>
                                                <h3>Subash Gamango</h3>
                                                <h4>Thematic Coordinator - Livelihoods</h4>
                                                <p>
                                                    Subash Gamango joined Gram Vikas in 2019 and is working as a Thematic Coordinator for the Livelihoods programme. He completed his Intermediate in Arts from Rushikulya College, Surada, in 2008. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-156">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-156" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0575.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Subash Gamango</h3>
                                                                    <h4>Thematic Coordinator - Livelihoods</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Subash Gamango joined Gram Vikas in 2019 and is working as a Thematic Coordinator for the Livelihoods programme. He completed his Intermediate in Arts from Rushikulya College, Surada, in 2008.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0159.jpg" width="300">
                                                </div>
                                                <h3>Subin Das</h3>
                                                <h4>Project Manager </h4>
                                                <p>
                                                    Subin Das has 17 years of experience working with rural communities. He is currently positioned as Project Manager in Gram Vikas. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-157">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-157" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0159.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Subin Das</h3>
                                                                    <h4>Project Manager </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Subin Das has 17 years of experience working with rural communities. He is currently positioned as </span>
                                                                        <span style="font-weight: 400;">Project Manager </span>
                                                                        <span style="font-weight: 400;">in Gram Vikas. Before joining Gram Vikas, he worked as a Community Line Worker in Western Orissa Rural Livelihoods Project for three years. He pursued Bachelor of Social Work from Shobhit University, Meerut, in 2014. His expertise includes community mobilization and construction of WATSAN Infrastructure</span>
                                                                        <span style="font-weight: 400;">.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0485.jpg" width="300">
                                                </div>
                                                <h3>Sudhansu Sekhar Rath</h3>
                                                <h4>Field Expert - Sanitation &amp;Health</h4>
                                                <p>
                                                    Sudhansu Sekhar Rath joined Gram Vikas in 2015 and is working as Field Expert for Sanitation and Health programme. He has 18 years of experience. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-158">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-158" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0485.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sudhansu Sekhar Rath</h3>
                                                                    <h4>Field Expert - Sanitation &amp;Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sudhansu Sekhar Rath joined Gram Vikas in 2015 and is working as Field Expert for Sanitation and Health programme. He has 18 years of experience. Before joining Gram Vikas, he worked in People’s Rural Education Movement (PREM) for 12 years on health, education and livelihood programmes. He pursued Bachelor of Arts in Sanskrit from Puri University in 1997.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0693.jpg" width="300">
                                                </div>
                                                <h3>Sujit Swain</h3>
                                                <h4>Thematic Coordinator - Water</h4>
                                                <p>
                                                    Sujit Swain joined Gram Vikas in 2019 and is working as a Thematic Coordinator for Water focus area. He supports the work on the springshed.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-159">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-159" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0693.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sujit Swain</h3>
                                                                    <h4>Thematic Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sujit Swain joined Gram Vikas in 2019 and is working as a Thematic Coordinator for </span>
                                                                        <span style="font-weight: 400;">Water focus area. He supports the work on the springshed. He completed Intermediate in Commerce from Chidananda Saraswati (Junior) Mahabidyalaya, Bamokoi, in 2010.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0176.jpg" width="300">
                                                </div>
                                                <h3>Sukadev Swain</h3>
                                                <h4>Thematic Coordinator - Water</h4>
                                                <p>
                                                    Sukadev Swain has 16 years of work experience. He joined Gram Vikas in 2008 and is currently working as Thematic Coordinator for Water. He pursued a Bachelor of Arts degree from IGNOU in 2012. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-160">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-160" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0176.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sukadev Swain</h3>
                                                                    <h4>Thematic Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sukadev Swain has 16 years of work experience. He joined Gram Vikas in 2008 and is currently working as Thematic Coordinator for Water. He pursued a Bachelor</span>
                                                                        <span style="font-weight: 400;">of Arts degree from IGNOU </span>
                                                                        <span style="font-weight: 400;">in 2012. Before joining Gram Vikas, he worked </span>
                                                                        <span style="font-weight: 400;">in Aradhana Foods and Goods Private Limited, Hyderabad as a Production In-charge and Assistant Security Officer for </span>
                                                                        <span style="font-weight: 400;"></span>
                                                                        <span style="font-weight: 400;">2 years.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0588.jpg" width="300">
                                                </div>
                                                <h3>Sumanta Raita</h3>
                                                <h4>Field Expert - Water</h4>
                                                <p>
                                                    Sumanta Raita joined Gram Vikas in 2020. He works as Field Expert in Water thematic area. He completed a Master of Social Work from Allahabad University and a Bachelor of Arts from Indira Memorial College, Chandiput, in 2008. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-162">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-162" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/AKB_0588.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sumanta Raita</h3>
                                                                    <h4>Field Expert - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sumanta Raita joined Gram Vikas in 2020. He works as Field Expert in Water thematic area. He completed a Master of Social Work from Allahabad University and a Bachelor of Arts from Indira Memorial College, Chandiput, in 2008. In his work experience, he worked as a Teacher in the Centre for Child and Women Development in Mohana block, Gajapati district, for seven years and as Lab Attendant in District Forensic Laboratory, Chhatrapur, for two years.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0606.jpg" width="300">
                                                </div>
                                                <h3>Sumati Devi</h3>
                                                <h4>Field Expert - Village Institution </h4>
                                                <p>
                                                    Sumati Devi joined Gram Vikas in 2017 and is working as a Field Expert for Village Institution programme. She is responsible for creating awareness on water, sanitation and hygiene behaviour at household levels. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-163">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-163" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0606.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sumati Devi</h3>
                                                                    <h4>Field Expert - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sumati Devi joined Gram Vikas in 2017 and is working as a Field Expert for </span>
                                                                        <span style="font-weight: 400;">Village Institution</span>
                                                                        <span style="font-weight: 400;">programme. She is responsible for creating awareness on water, sanitation and hygiene behaviour at household levels. She has 7 years of experience working with rural communities and especially women groups in Jharkhand.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0432.jpg" width="300">
                                                </div>
                                                <h3>Sunil Kumar Sahu</h3>
                                                <h4>Thematic Coordinator - Sanitation &amp;Health</h4>
                                                <p>
                                                    Sunil Kumar Sahu is currently working as a Thematic Coordinator for Sanitation & Health programmes in Gram Vikas, joined in 2015. He completed Intermediate in Arts from Rajiv Gandhi Memorial Tribal College, Kalheipali, Sambalpur, in 2010.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-165">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-165" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0432.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sunil Kumar Sahu</h3>
                                                                    <h4>Thematic Coordinator - Sanitation &amp;Health</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sunil Kumar Sahu is currently working as a Thematic Coordinator for </span>
                                                                        <span style="font-weight: 400;">Sanitation &amp;Health </span>
                                                                        <span style="font-weight: 400;">programmes in Gram Vikas, joined in 2015. He completed Intermediate in Arts from Rajiv Gandhi Memorial Tribal College, Kalheipali, Sambalpur, in 2010. He has experience in toilet and bathing rooms construction and Water Quality Management.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0601.jpg" width="300">
                                                </div>
                                                <h3>Suresh Chandra Barik</h3>
                                                <h4>Senior Divisional Coordinator - Water</h4>
                                                <p>
                                                    Suresh Chandra Barik is working as a Senior Divisional Coordinator for Water in Gram Vikas. He has been with us since 2017. He has 28 years of experience working with the rural communities. He worked with Lutheran World Service India Trust as Unit Manager for 24 years. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-166">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-166" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0601.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Suresh Chandra Barik</h3>
                                                                    <h4>Senior Divisional Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Suresh Chandra Barik is working as a </span>
                                                                        <span style="font-weight: 400;">Senior Divisional Coordinator for Water in Gram Vikas. He has been with us since 2017. He has 28 years of experience working with the rural communities. He worked with Lutheran World Service India Trust as Unit Manager for 24 years. He passed Matriculation from Balipatana High School in 1982. He has experience in facilitating training on leadership development, gender advocacy, Forest Rights Act, livelihoods and pro-poor development legislation.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0102.jpg" width="300">
                                                </div>
                                                <h3>Susanta Kumar Pradhan</h3>
                                                <h4>Thematic Coordinator - Water</h4>
                                                <p>
                                                    Susanta Kumar Pradhan has been working with us for 17 years now. He is the Thematic Coordinator for Water in Gram Vikas. He holds a Master in Social Work degree from Binayak Mission University in 2009. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-167">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-167" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0102.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Susanta Kumar Pradhan</h3>
                                                                    <h4>Thematic Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Susanta Kumar Pradhan has been working with us for 17 years now. He is the Thematic Coordinator for Water in Gram Vikas. He holds a Master in Social Work degree from Binayak Mission University in 2009. His expertise includes community mobilization and water &amp;sanitation.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0080.jpg" width="300">
                                                </div>
                                                <h3>Trinath Pradhan</h3>
                                                <h4>Thematic Coordinator - Water</h4>
                                                <p>
                                                    Trinath Pradhan is working as Thematic Coordinator for Water in Gram Vikas. He has 23 years of experience in social development.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-170">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-170" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0080.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Trinath Pradhan</h3>
                                                                    <h4>Thematic Coordinator - Water</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Trinath Pradhan is working as </span>
                                                                        <span style="font-weight: 400;">Thematic Coordinator for Water </span>
                                                                        <span style="font-weight: 400;">in Gram Vikas. He has 23 years of experience in social development. He passed Matriculation from Project High School, Kolab Nagar in 1984. His expertise is in community mobilization.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/11/Tushar-Kanta-Behura-scaled.jpg" width="300">
                                                </div>
                                                <h3>Tusharkanta Behura</h3>
                                                <h4>Field Expert - Village Institution </h4>
                                                <p>
                                                    Tusharkanta Behura is a Field Expert for Village Institution programme. He pursued Master of Social Work from Utkal University of Culture, Bhubaneswar, passed in 2008. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-172">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-172" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/11/Tushar-Kanta-Behura-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Tusharkanta Behura</h3>
                                                                    <h4>Field Expert - Village Institution </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;"></span>
                                                                        <span style="font-weight: 400;">Tusharkanta Behura is a Field Expert for Village Institution programme. He pursued Master of Social Work from Utkal University of Culture, Bhubaneswar, passed in 2008.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mt-3">
                                            <h2 class="section-title" style="font-size: 36px;margin-left: 15px;">Programme Support</h2>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0120.jpg" width="300">
                                                </div>
                                                <h3>Bata Krushna Nayak</h3>
                                                <h4>Senior Supervisor - WRTG</h4>
                                                <p>
                                                    Bata Krushna Nayak has been working with Gram Vikas for 15 years. He is currently working as Senior Supervisor for Water Resources Technology Group (WRTG). <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-200">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-200" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0120.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Bata Krushna Nayak</h3>
                                                                    <h4>Senior Supervisor - WRTG</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bata Krushna Nayak has been working with Gram Vikas for 15 years. He is currently working as Senior Supervisor for Water Resources Technology Group (WRTG). Before joining Gram Vikas he was working as a Project Coordinator with ORRISSA for four years. Bata holds a Master of Business Administration (Human Resource) from Binayak Mission University in 2014 as well as a degree in Master in Social Work.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0639.jpg" width="300">
                                                </div>
                                                <h3>Bhagya Laxmi Puhan</h3>
                                                <h4>Engineer - Water Resources Technology Group</h4>
                                                <p>
                                                    Bhagya Laxmi Puhan joined Gram Vikas in 2018 as an Engineer. She is part of the Water Resources Technology Group. She completed her Diploma in Civil Engineering from Ramarani Institute of Technology, Balasore in 2013.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-201">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-201" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0639.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Bhagya Laxmi Puhan</h3>
                                                                    <h4>Engineer - Water Resources Technology Group</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bhagya Laxmi Puhan joined Gram Vikas in 2018 as an Engineer. She is part of the Water Resources Technology Group. She completed her Diploma in Civil Engineering from Ramarani Institute of Technology, Balasore in 2013. She has experience working on engineering plans and designs through AutoCAD and QGIS.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/05/Bhisma-Kumar-Bai.jpg" width="300">
                                                </div>
                                                <h3>Bhisma Kumar Bai</h3>
                                                <h4>Junior Manager - Strategic Communications</h4>
                                                <p>
                                                    Bhisma Kumar Bai is the Junior Manager for Strategic Communications at Gram Vikas. He manages the intern and volunteer mobilisation from colleges and universities and the media outreach. He has worked with OXFAM India in Bangalore, Jaipur, and Bhubaneswar for nine years on Public Engagement and Fundraising. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-202">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-202" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/05/Bhisma-Kumar-Bai.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Bhisma Kumar Bai</h3>
                                                                    <h4>Junior Manager - Strategic Communications</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bhisma Kumar Bai is the Junior Manager for Strategic Communications at Gram Vikas. He manages the intern and volunteer mobilisation from colleges and universities and the media outreach. He has worked with OXFAM India in Bangalore, Jaipur, and Bhubaneswar for nine years on Public Engagement and Fundraising.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bhisma holds a Master of Business Administration (Marketing) from Indian Institute of Planning and Management, Bhubaneswar.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0099.jpg" width="300">
                                                </div>
                                                <h3>Bidyutprava Praharaj</h3>
                                                <h4>Thematic Coordinator - Planning &amp;Monitoring</h4>
                                                <p>
                                                    Bidyutprava Praharaj is the Thematic Coordinator - Planning and Monitoring in Kalahandi district and has been with us for 17 years. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-207">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-207" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0099.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Bidyutprava Praharaj</h3>
                                                                    <h4>Thematic Coordinator - Planning &amp;Monitoring</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bidyutprava Praharaj is the Thematic Coordinator &#8211;Planning and Monitoring in Kalahandi district and has been with us for 17 years. She joined as an Assistant Teacher at Gram Vikas Shikshya Niketan, Kankia and took care of the health and boarding of school children along with teaching. Since then, she has taken various roles and responsibilities at Gram Vikas as an Office Assistant, Campus in-charge, volunteer management, and supporting with planning, monitoring, and accounting.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">In 2020, she was promoted as Project Coordinator for the project office in Bafla and managed the water and sanitation, water source sustainability and smart community projects in the area.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Prior to joining Gram Vikas, she worked as a Supervisor for a child education programme with SWS, Koinpur.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bidyutprava completed matriculation from Duduli Vidyapitha, Bandhaghatia. She underwent training on Social Changes and Leadership in Community from Azim Premji University, Bangalore.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0745.jpg" width="300">
                                                </div>
                                                <h3>Dibya Ranjan Shaw</h3>
                                                <h4>Programme Technician - Habitat &amp;Technology</h4>
                                                <p>
                                                    Dibya Ranjan Shaw works as a Programme Technician at Gram Vikas from 2020. He supports the installation of solar water pumps. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-225">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-225" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0745.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Dibya Ranjan Shaw</h3>
                                                                    <h4>Programme Technician - Habitat &amp;Technology</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Dibya Ranjan Shaw works as a Programme Technician at Gram Vikas from 2020. He supports the installation of solar water pumps. Earlier, he worked as a Senior Fitter in Vedanta Aluminium Limited and Bhushan Steel Plant for 12 years. He completed his Diploma in Mechanical Engineering from Divine Institute of Engineering and Technology in 2015. His expertise is in mechanical and maintenance work.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2024/01/Dipanchi-Dutta-scaled.jpg" width="300">
                                                </div>
                                                <h3>Dipanchi Dutta</h3>
                                                <h4>Thematic Coordinator - PMDC</h4>
                                                <p>
                                                    Dipanchi joined Gram Vikas as the Thematic Coordinator for Planning, Monitoring, Documentation, and Communication in August 2023. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-227">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-227" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2024/01/Dipanchi-Dutta-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Dipanchi Dutta</h3>
                                                                    <h4>Thematic Coordinator - PMDC</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Dipanchi joined Gram Vikas as the Thematic Coordinator for Planning, Monitoring, Documentation, and Communication in August 2023. She completed her Master &#8217;s Degree in Development Management from the Indian School of Development Management (ISDM), Delhi, in 2023. Dipanchi holds a Bachelor &#8217;s Degree with honors in History from Guwahati University.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0020.jpg" width="300">
                                                </div>
                                                <h3>Gouri Shankar Naik</h3>
                                                <h4>District Coordinator - RMSG</h4>
                                                <p>
                                                    Gouri Shankar Naik is working as District Coordinator for Resource Mobilisation Support Group (RMSG) in Gram Vikas. He has been with us for 33 years now.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-232">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-232" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0020.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Gouri Shankar Naik</h3>
                                                                    <h4>District Coordinator - RMSG</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Gouri Shankar Naik is working as </span>
                                                                        <span style="font-weight: 400;">District Coordinator for Resource Mobilisation Support Group (RMSG)</span>
                                                                        <span style="font-weight: 400;">in Gram Vikas. He has been with us for 33 years now. </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0532.jpg" width="300">
                                                </div>
                                                <h3>Kalu Shankar Pani</h3>
                                                <h4>Programme Technician</h4>
                                                <p>
                                                    Kalu Shankar Pani has been working as a Programme Technician at Gram Vikas since 2016. He has 12 years of experience in the electrical and plumbing field. For three years, he worked in Akhandalamani Electrical Construction, two-plus years in Tata Steel (Aluminum Plant) in Visakhapatnam, one and half years in Rourkela Steel Plant. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-244">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-244" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0532.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Kalu Shankar Pani</h3>
                                                                    <h4>Programme Technician</h4>
                                                                    <p>Kalu Shankar Pani has been working as a Programme Technician at Gram Vikas since 2016. He has 12 years of experience in the electrical and plumbing field. For three years, he worked in Akhandalamani Electrical Construction, two-plus years in Tata Steel (Aluminum Plant) in Visakhapatnam, one and half years in Rourkela Steel Plant.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/09/Malay-Kumar-Panda-scaled.jpg" width="300">
                                                </div>
                                                <h3>Malay Kumar Panda</h3>
                                                <h4>Electrical Engineer - Habitat &amp;Technology</h4>
                                                <p>
                                                    Malay Kumar Panda is an Electrical Engineer with expertise in solar pumping systems, solar electricity and water quality. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-252">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-252" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/09/Malay-Kumar-Panda-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Malay Kumar Panda</h3>
                                                                    <h4>Electrical Engineer - Habitat &amp;Technology</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Malay Kumar Panda is an Electrical Engineer with expertise in solar pumping systems, solar electricity and water quality. He completed a Diploma in Electrical Engineering from Jhadeswar Institute of Engineering and Technology and Bachelor of Technology in Electrical Engineering from Oxford College of Engineering and Management, Bhubaneswar.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0234.jpg" width="300">
                                                </div>
                                                <h3>Manikamala Swain</h3>
                                                <h4>Thematic Coordinator - PMO</h4>
                                                <p>
                                                    Manikamala Swain is currently positioned as Thematic Coordinator for Planning and Monitoring (PMO) in Gram Vikas. She has 22 years of experience in the field of development sector.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-254">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-254" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0234.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Manikamala Swain</h3>
                                                                    <h4>Thematic Coordinator - PMO</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Manikamala Swain is currently positioned as Thematic Coordinator for Planning and Monitoring (PMO) </span>
                                                                        <span style="font-weight: 400;">in Gram Vikas. She has 22 years of experience in the field of development sector. She holds a Master of Arts in Rural Development (MARD) from IGNOU and Bachelor of Science in Zoology from Utkal University in 2000. She has experience in accounts and documentation.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2024/01/Prangya-Nibedita-Mishra-scaled.jpg" width="300">
                                                </div>
                                                <h3>Prangya Nibedita Mishra</h3>
                                                <h4>Coordinator - Data Management (Trainee)</h4>
                                                <p>
                                                    Prangya joined Gram Vikas as the Coordinator - Data Management in August 2023. She completed her Master of Social Work (MSW) from Utkal University in 2021 and holds a Bachelor's degree in Sociology from Rama Devi Women's University, Bhubaneswar. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-272">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-272" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2024/01/Prangya-Nibedita-Mishra-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Prangya Nibedita Mishra</h3>
                                                                    <h4>Coordinator - Data Management (Trainee)</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Prangya joined Gram Vikas as the Coordinator &#8211;Data Management in August 2023. She completed her Master of Social Work (MSW) from Utkal University in 2021 and holds a Bachelor &#8217;s degree in Sociology from Rama Devi Women &#8217;s University, Bhubaneswar.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/09/Prasanta-Kumar-Naik.jpg" width="300">
                                                </div>
                                                <h3>Prasanta Kumar Naik</h3>
                                                <h4>Thematic Coordinator - PMO </h4>
                                                <p>
                                                    Prasanta Kumar Naik joined Gram Vikas in 2017 and is working as a Thematic Coordinator for Planning and Monitoring. He has a total of 14 years of experience. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-273">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-273" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/09/Prasanta-Kumar-Naik.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Prasanta Kumar Naik</h3>
                                                                    <h4>Thematic Coordinator - PMO </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Prasanta Kumar Naik joined Gram Vikas in 2017 and is working as a Thematic Coordinator for Planning and Monitoring. He has a total of 14 years of experience. Before joining Gram Vikas, he worked as a Technical Assistant (Database) in Videocon Industries Limited (Oil &amp;Gas Division) in Chennai for nine years. He pursued Masters of Business Administration in Banking and Finance from Alagappa University, Tamil Nadu, in 2012.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0741.jpg" width="300">
                                                </div>
                                                <h3>Premananda Nayak</h3>
                                                <h4>Engineer - CESG</h4>
                                                <p>
                                                    Premananda Nayak joined Gram Vikas in 2019 and is working as an Engineer for Civil Engineering Support Group. He has a total of 6 years of experience in civil engineering. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-276">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-276" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0741.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Premananda Nayak</h3>
                                                                    <h4>Engineer - CESG</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Premananda Nayak joined Gram Vikas in 2019 and is working as an Engineer for Civil Engineering Support Group. He has a total of 6 years of experience in civil engineering. He pursued Bachelors of Technology in Civil Engineering from Subas Institute of Technology in 2015. He served one year as a Junior Engineer in Intach Conservation Institute. His expertise includes Construction.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/08/IMG_7597-2-scaled.jpg" width="300">
                                                </div>
                                                <h3>Santosh Kumar Rout</h3>
                                                <h4>Coordinator - Documentation</h4>
                                                <p>
                                                    Santosh Kumar Rout is Coordinator for Documentation and Communication thematic area. He leads content production within the Communications team in Odia language. He handles the Odia Facebook page of Gram Vikas and also handles publishing of the periodic regional newsletter “Gram Vikas Samachar”. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-291">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-291" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/08/IMG_7597-2-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Santosh Kumar Rout</h3>
                                                                    <h4>Coordinator - Documentation</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Santosh Kumar Rout is Coordinator for Documentation and Communication thematic area. He leads content production within the Communications team in Odia language. He handles the Odia Facebook page of Gram Vikas and also handles publishing of the periodic regional newsletter “Gram Vikas Samachar”. He has worked with many national and international organizations like UNICEF, Churches Auxilary for Social Action (CASA) India, Odisha Institute of Medical Research and Health Services, Peoples Cultural Centre (PECUC), and UNDP India in various capacities. Santosh holds a Master of Social Work (MSW) degree from Utkal University of Culture. Santosh has creative writing and singing skills too.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0614.jpg" width="300">
                                                </div>
                                                <h3>Soumya Ranjan Mohanty</h3>
                                                <h4>Engineer - CESG</h4>
                                                <p>
                                                    Soumya Ranjan Mohanty is working as an Engineer for Civil Engineering Support Group in Gram Vikas since 2017. He has experience in construction supervision, preparing estimates, Bill Of Quantities, designs and drawings using AutoCAD. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-301">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-301" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0614.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Soumya Ranjan Mohanty</h3>
                                                                    <h4>Engineer - CESG</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Soumya Ranjan Mohanty is working as an Engineer for Civil Engineering Support Group in Gram Vikas since 2017. He has experience in construction supervision, preparing estimates, Bill Of Quantities, designs and drawings using AutoCAD. He has a Bachelor of Technology from Indic Institute of Design and Research, Bhubaneswar and a Diploma in Civil Engineering from Nalanda Institute of Technology, Bhubaneswar.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0281.jpg" width="300">
                                                </div>
                                                <h3>Trilochan Jena</h3>
                                                <h4>Senior Divisional Coordinator - RMSG</h4>
                                                <p>
                                                    Trilochan Jena has 20 years of work experience in the social development sector. He is now working as a Senior Divisional Coordinator - Resource Mobilisation Support Group in Gram Vikas joined in 2014. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-315">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-315" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0281.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Trilochan Jena</h3>
                                                                    <h4>Senior Divisional Coordinator - RMSG</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Trilochan Jena </span>
                                                                        <span style="font-weight: 400;">has 20 years of work experience in the social development sector. He is now working as a </span>
                                                                        <span style="font-weight: 400;">Senior Divisional Coordinator &#8211;Resource Mobilisation Support Group</span>
                                                                        <span style="font-weight: 400;">in Gram Vikas joined in 2014. As Project Coordinator, he has been part of projects like Odisha Disaster Recovery Project in Ganjam district, PoWER project in Rayagada district and was into government liaison and resource mobilization for some time. Earlier he served 14 years as </span>
                                                                        <span style="font-weight: 400;">Community Team Leader for Livelihoods and Village Institutions programme in the Lutheran World Service India Trust. He</span>
                                                                        <span style="font-weight: 400;">holds a Master</span>
                                                                        <span style="font-weight: 400;">in Sociology</span>
                                                                        <span style="font-weight: 400;">in 2008 and Postgraduate Diploma in Human Resource Management in 2013 from IGNOU.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0130.jpg" width="300">
                                                </div>
                                                <h3>Y Chandra Kumar</h3>
                                                <h4>Coordinator - PWS Recovery</h4>
                                                <p>
                                                    Y Chandra Kumar is working as a Coordinator - Piped Water Supply (PWS) Recovery. He pursued Bachelor of Commerce from Berhampur University, passed in 2000 and Master of Social Work from Vinayak Missions University, Chennai in 2012.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-319">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-319" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0130.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Y Chandra Kumar</h3>
                                                                    <h4>Coordinator - PWS Recovery</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Y Chandra Kumar is working as a </span>
                                                                        <span style="font-weight: 400;">Coordinator &#8211;Piped Water Supply (PWS) Recovery. </span>
                                                                        <span style="font-weight: 400;">He pursued Bachelor of Commerce from Berhampur University, passed in 2000 and Master of Social Work from Vinayak Missions University, Chennai in 2012. He is continuing a Diploma in Health and Nutrition Education from IGNOU. He earlier worked with Padhi and Co., a Chartered Accounting Firm in Berhampur.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mt-3">
                                            <h2 class="section-title" style="font-size: 36px;margin-left: 15px;">Finance & Accounts</h2>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0149.jpg" width="300">
                                                </div>
                                                <h3>Ajit Kumar Raut</h3>
                                                <h4>District Accountant</h4>
                                                <p>
                                                    Ajit Kumar Raut is a District Accountant with Gram Vikas. An expert in Tally software, he has an MBA in Finance & Accounts from Berhampur University. Additionally, he has an M.A. in Odia from Government Autonomous College, Bhawanipatna, and MSW from Allahabad University. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-323">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-323" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0149.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Ajit Kumar Raut</h3>
                                                                    <h4>District Accountant</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Ajit Kumar Raut is a District Accountant with Gram Vikas. An expert in Tally software, he has an MBA in Finance &amp;Accounts from Berhampur University. Additionally, he has an M.A. in Odia from Government Autonomous College, Bhawanipatna, and MSW from Allahabad University.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2024/10/Biresh-Khillar-scaled.jpg" width="300">
                                                </div>
                                                <h3>Biresh Kumar Khilar</h3>
                                                <h4>District Accounts Lead</h4>
                                                <p>
                                                    Biresh Kumar Khilar joined Gram Vikas as the District Accounts Lead in March 2024, bringing over 24 years of extensive experience in finance and administration. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-358">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-358" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2024/10/Biresh-Khillar-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Biresh Kumar Khilar</h3>
                                                                    <h4>District Accounts Lead</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Biresh Kumar Khilar joined Gram Vikas as the District Accounts Lead in March 2024, bringing over 24 years of extensive experience in finance and administration. Previously, he worked as a Finance &amp;Administrative Officer at Ramadevi Village Development Organisation (RVDO) and Unnayan. Earlier in his career, he served as Finance Officer at WOSCA and as an Accountant with Agragamee. Biresh holds a Master of Commerce (M.Com), Bachelor of Commerce (B.Com), and a Bachelor of Laws (LLB), all from Utkal University.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2024/10/IMG_2915-scaled.jpg" width="300">
                                                </div>
                                                <h3>Bukky Das</h3>
                                                <h4>State Finance Lead</h4>
                                                <p>
                                                    Bukky Das joined Gram Vikas as the State Finance Lead in March 2024. He brings nearly 24 years of extensive experience from World Vision India, where he served as Manager - Programme and previously as Finance Officer. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-361">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-361" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2024/10/IMG_2915-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Bukky Das</h3>
                                                                    <h4>State Finance Lead</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bukky Das joined Gram Vikas as the State Finance Lead in March 2024. He brings nearly 24 years of extensive experience from World Vision India, where he served as Manager &#8211;Programme and previously as Finance Officer. Prior to that, Bukky held the position of Regional Accountant with Campus Crusade for Christ.</span>
                                                                    </p>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bukky holds a Master’s degree in Social Work from Rabindranath Tagore University, an M.Com in Finance and Control from Alagappa University, and a B.Com in Accounting from Utkal University. His diverse background in financial management and program oversight enhances his role at Gram Vikas, where he is committed to advancing the organisation’s financial strategies and impact.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0196.jpg" width="300">
                                                </div>
                                                <h3>Niranjan Sahu</h3>
                                                <h4>District Accountant</h4>
                                                <p>
                                                    Niranjan Sahu is a District Accountant in Gram Vikas, working with us since 2012. He has served in OTELP Plus and ITDP projects in Thuamul Rampur block of Kalahandi district, School Sanitation project in Nayagarh district and now managing accounts and administration in Koinpur in Gajapati district. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-409">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-409" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0196.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Niranjan Sahu</h3>
                                                                    <h4>District Accountant</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Niranjan Sahu is a District Accountant in Gram Vikas, working with us since 2012. He has served in OTELP Plus and ITDP projects in Thuamul Rampur block of Kalahandi district, School Sanitation project in Nayagarh district and now managing accounts and administration in Koinpur in Gajapati district. He completed a Bachelor of Arts degree from Udaya Pratap Science College, Seragada in 2010. He has worked with M/s. Krishna Plast Pvt. Ltd. in Bargarh as an Accountant from 2011 to 2012. He has a total 10 years of experience in accounts. He is experienced in using Tally ERP 9.0.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0063.jpg" width="300">
                                                </div>
                                                <h3>Prabhat Kumar Pattnaik</h3>
                                                <h4>Senior Accountant</h4>
                                                <p>
                                                    Prabhat Kumar Pattnaik is the Senior Accountant at Gram Vikas. He has 23 years of experience in managing project and head office accounts at Gram Vikas.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-416">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-416" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0063.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Prabhat Kumar Pattnaik</h3>
                                                                    <h4>Senior Accountant</h4>
                                                                    <p>Prabhat Kumar Pattnaik is the Senior Accountant at Gram Vikas. He has 23 years of experience in managing project and head office accounts at Gram Vikas. He holds a Master of Commerce from Berhampur University.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0781.jpg" width="300">
                                                </div>
                                                <h3>Purna Chandra Panda</h3>
                                                <h4>District Accountant</h4>
                                                <p>
                                                    Purna Chandra Panda joined Gram Vikas in 2021 and is currently working as District Accountant. He has 7 years of experience in the accounting field. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-423">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-423" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0781.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Purna Chandra Panda</h3>
                                                                    <h4>District Accountant</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Purna Chandra Panda joined Gram Vikas in 2021 and is currently working as District Accountant. He has 7 years of experience in the accounting field. From 2013 to 2016, he served as Accounts Assistant in Gram Vikas managing project accounts. He then worked in Livolink Foundation as an Accounts Assistant cum Admin for four and half years. Purna pursued a Bachelor of Arts from Nrusinghanath College, Mahanadapur, in 2013 and Certificate Course on Tally ERP-9 from National Hardware Informatic Centre in 2011. Now he is pursuing a Masters in Business Administration in Finance from University of Rourkela.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0588.jpg" width="300">
                                                </div>
                                                <h3>Rajendra Jena</h3>
                                                <h4>Accountant for Head Office Accounts</h4>
                                                <p>
                                                    Rajendra Jena is an Accountant in the Gram Vikas Head Office accounts department. He served six years as an Accountant in Centurion University, Bhubaneswar. He pursued Master of Business Administration from North Orissa University in 2008. He also has been certified with ‘O’ Level from DOEACC in computer courses. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-427">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-427" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0588.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Rajendra Jena</h3>
                                                                    <h4>Accountant for Head Office Accounts</h4>
                                                                    <p>Rajendra Jena is an Accountant in the Gram Vikas Head Office accounts department. He served six years as an Accountant in Centurion University, Bhubaneswar. He pursued Master of Business Administration from North Orissa University in 2008. He also has been certified with ‘O’ Level from DOEACC in computer courses.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0632.jpg" width="300">
                                                </div>
                                                <h3>Rajib Lochan Mohapatra</h3>
                                                <h4>District Accountant</h4>
                                                <p>
                                                    Rajib Lochan Mohapatra has joined Gram Vikas in 2017 and is working as a District Accountant. He manages accounts and bookkeeping of projects and programmes. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-429">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-429" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0632.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Rajib Lochan Mohapatra</h3>
                                                                    <h4>District Accountant</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Rajib Lochan Mohapatra has joined Gram Vikas in 2017 and is working as a District Accountant. He manages accounts and bookkeeping of projects and programmes. Before joining Gram Vikas, he worked as an Accountant in Spandan Environ Private Limited for two and half years. He pursued a Bachelor in Commerce with Accounting as honours from Utkal University in 2008 and has been certified with DOEACC &#8211;‘A’ level from Odisha Computer Application Centre, Bhubaneswar.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0116.jpg" width="300">
                                                </div>
                                                <h3>Sunil Kumar Jena</h3>
                                                <h4>District Accountant</h4>
                                                <p>
                                                    Sunil Kumar Jena has been working as a District Accountant in Gram Vikas. He joined the organization in 2006 and has been with us for 15 years. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-456">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-456" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0116.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sunil Kumar Jena</h3>
                                                                    <h4>District Accountant</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sunil Kumar Jena has been working as a District Accountant in Gram Vikas. He joined the organization in 2006 and has been with us for 15 years. He manages the project accounts and bookkeeping. He pursued Bachelor of Commerce from Kabi Samrat Upendra Bhanja College, Bhanjanagar, passed in 2000.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0154.jpg" width="300">
                                                </div>
                                                <h3>Taraka Nath Padhy</h3>
                                                <h4>District Accountant</h4>
                                                <p>
                                                    Taraka Nath Padhy is working as a District Accountant in Gram Vikas. He has 18 years of experience in total. He joined us in 2008. He manages the project books of account.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-460">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-460" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0154.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Taraka Nath Padhy</h3>
                                                                    <h4>District Accountant</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Taraka Nath Padhy is working as a </span>
                                                                        <span style="font-weight: 400;">District Accountant </span>
                                                                        <span style="font-weight: 400;">in Gram Vikas. He has 18 years of experience in total. He joined us in 2008. He manages the project books of account. Before joining Gram Vikas, he worked for Eastern Steel Industry, Kolkata as Material Supervisor for 2 years, Advance Security, Kolkata as Accountant for 2 years, and Barrackpore Senate Public School as a Computer Training and English Teacher for 1 year. He pursued a Bachelor of Commerce from Calcutta University, in 1997 and has a Diploma in Financial Accounting System from Barrackpore Youth Computer Training Centre in 2007. His expertise is in accounts and tally.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mt-3">
                                            <h2 class="section-title" style="font-size: 36px;margin-left: 15px;">Administrative Support</h2>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0051.jpg" width="300">
                                                </div>
                                                <h3>Ajoy Kumar Baral</h3>
                                                <h4>Artist</h4>
                                                <p>
                                                    Ajoy Kumar Baral is an artist and manages the Art Section overseeing the production of painted or screen-printed information materials. He has been with Gram Vikas for more than 29 years. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-470">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-470" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0051.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Ajoy Kumar Baral</h3>
                                                                    <h4>Artist</h4>
                                                                    <p>Ajoy Kumar Baral is an artist and manages the Art Section overseeing the production of painted or screen-printed information materials. He has been with Gram Vikas for more than 29 years.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0506.jpg" width="300">
                                                </div>
                                                <h3>Apriya Maharana</h3>
                                                <h4>Technician</h4>
                                                <p>
                                                    Apriya Maharana is a Technician responsible for electrical installations in the Gram Vikas, Mohuda, campus. He has a Bachelor of Commerce degree from Utkal University. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-476">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-476" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0506.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Apriya Maharana</h3>
                                                                    <h4>Technician</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Apriya Maharana is a Technician responsible for electrical installations in the Gram Vikas, Mohuda, campus. He has a Bachelor of Commerce degree from Utkal University.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0041.jpg" width="300">
                                                </div>
                                                <h3>Babula Das</h3>
                                                <h4>Technician </h4>
                                                <p>
                                                    Babula Das is a Technician in the Gram Vikas, Mohuda, campus. He has been with us since the last 31 years. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-486">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-486" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0041.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Babula Das</h3>
                                                                    <h4>Technician </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Babula Das is a Technician in the Gram Vikas, Mohuda, campus. He has been with us since the last 31 years.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0637.jpg" width="300">
                                                </div>
                                                <h3>Bapini Das</h3>
                                                <h4>Night Watchman</h4>
                                                <p>
                                                    Bapini Das joined us in 2017 as the Night Watchman in the Gram Vikas, Mohuda, campus. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-490">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-490" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0637.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Bapini Das</h3>
                                                                    <h4>Night Watchman</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bapini Das joined us in 2017 as the Night Watchman in the Gram Vikas, Mohuda, campus.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/09/Bijay-Kumar-Pradhan-scaled.jpg" width="300">
                                                </div>
                                                <h3>Bijay Kumar Pradhan</h3>
                                                <h4>Office Assistant cum Cook</h4>
                                                <p>
                                                    Bijay Kumar Pradhan joined as an Office Assistant cum Cook in December 2021. In the past, he worked with us from 1998 till 2016. In between he was working as a Cook in SPD Construction, Bhubaneswar for five years. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-500">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-500" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2022/09/Bijay-Kumar-Pradhan-scaled.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Bijay Kumar Pradhan</h3>
                                                                    <h4>Office Assistant cum Cook</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Bijay Kumar Pradhan joined as an Office Assistant cum Cook in December 2021. In the past, </span>
                                                                        <span style="font-weight: 400;">he worked with us from 1998 till 2016. In between he was working as a Cook in SPD Construction, Bhubaneswar for five years.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0055.jpg" width="300">
                                                </div>
                                                <h3>John Paul Khujur</h3>
                                                <h4>Driver</h4>
                                                <p>
                                                    John Paul Khujur has been working as a Driver at Gram Vikas for 23 years now. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-532">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-532" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0055.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>John Paul Khujur</h3>
                                                                    <h4>Driver</h4>
                                                                    <p>John Paul Khujur has been working as a Driver at Gram Vikas for 23 years now.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0069.jpg" width="300">
                                                </div>
                                                <h3>Krushna Chandra Panda</h3>
                                                <h4>Campus Coordinator</h4>
                                                <p>
                                                    Krushna Chandra Panda is the Campus Coordinator for the Gram Vikas Mohuda campus. He looks after the administration, facility and fleet.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-541">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-541" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0069.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Krushna Chandra Panda</h3>
                                                                    <h4>Campus Coordinator</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Krushna Chandra Panda is the Campus </span>
                                                                        <span style="font-weight: 400;">Coordinator for the Gram Vikas Mohuda campus</span>
                                                                        <span style="font-weight: 400;">. He looks after the administration, facility and fleet. He has 22 years of experience in driving and vehicle mechanical supervision.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0100.jpg" width="300">
                                                </div>
                                                <h3>Nilambar Dash</h3>
                                                <h4>Driver cum Office Assistant </h4>
                                                <p>
                                                    Nilambar Dash has 25 years of driving experience. He joined Gram Vikas in 2004 and is now Driver cum Office Assistant in Gram Vikas campus in Mohuda. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-554">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-554" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0100.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Nilambar Dash</h3>
                                                                    <h4>Driver cum Office Assistant </h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Nilambar Dash has 25 years of driving experience. He joined Gram Vikas in 2004 and is now </span>
                                                                        <span style="font-weight: 400;">Driver cum Office Assistant </span>
                                                                        <span style="font-weight: 400;">in Gram Vikas campus in Mohuda.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0038.jpg" width="300">
                                                </div>
                                                <h3>Norbert Soreng</h3>
                                                <h4>Driver cum Campus Supervisor</h4>
                                                <p>
                                                    Norbert Soreng has 31 years of driving experience. He is now Driver cum Campus Supervisor and looking after the stock keeping and maintenance of the campus in Rudhapadar, Ganjam district. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-556">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-556" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0038.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Norbert Soreng</h3>
                                                                    <h4>Driver cum Campus Supervisor</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Norbert Soreng has 31 years of driving experience. He is now </span>
                                                                        <span style="font-weight: 400;">Driver cum Campus Supervisor</span>
                                                                        <span style="font-weight: 400;">and looking after the stock keeping and maintenance of the campus in Rudhapadar, Ganjam district.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0124.jpg" width="300">
                                                </div>
                                                <h3>Pramod Kumar Das</h3>
                                                <h4>Driver cum Campus Supervisor</h4>
                                                <p>
                                                    Pramod Kumar Das has been working as a Driver cum Campus Supervisor in Gram Vikas for 14 years now. He completed Intermediate from Udaya Pratap Science College, Ramagiri in 1998. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-563">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-563" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0124.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Pramod Kumar Das</h3>
                                                                    <h4>Driver cum Campus Supervisor</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Pramod Kumar Das has been working as a </span>
                                                                        <span style="font-weight: 400;">Driver cum Campus Supervisor </span>
                                                                        <span style="font-weight: 400;">in Gram Vikas for 14 years now. He completed Intermediate from Udaya Pratap Science College, Ramagiri in 1998.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0025.jpg" width="300">
                                                </div>
                                                <h3>Rabindra Kumar Padhi</h3>
                                                <h4>Coordinator - Store &amp;Data</h4>
                                                <p>
                                                    Rabindra Kumar Padhi has been with Gram Vikas for 33 years. He is responsible for managing the store and coordinating the office supplies at Gram Vikas.  <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-571">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-571" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0025.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Rabindra Kumar Padhi</h3>
                                                                    <h4>Coordinator - Store &amp;Data</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Rabindra Kumar Padhi has been with Gram Vikas for 33 years. He is responsible for managing the store and coordinating the office supplies at Gram Vikas. He is also responsible for managing the data and records at Gram Vikas.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0202.jpg" width="300">
                                                </div>
                                                <h3>Rajendra Kumar Tripathy</h3>
                                                <h4>Gatekeeper</h4>
                                                <p>
                                                    Rajendra Kumar Tripathy has been working in Gram Vikas as a Gatekeeper since 2013. He ensures security in the main entrance in Gram Vikas campus in Mohuda. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-574">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-574" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0202.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Rajendra Kumar Tripathy</h3>
                                                                    <h4>Gatekeeper</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Rajendra Kumar Tripathy has been working in Gram Vikas as a Gatekeeper since 2013. He ensures security in the main entrance in Gram Vikas campus in Mohuda.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/02/Samir-Kumar-Das.jpg" width="300">
                                                </div>
                                                <h3>Samir Kumar Das</h3>
                                                <h4>Technician</h4>
                                                <p>
                                                    Samir Kumar Das has worked as a Technician in Gram Vikas for fourteen years. He provides support on electricals, electronics and hardware. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-579">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-579" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2023/02/Samir-Kumar-Das.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Samir Kumar Das</h3>
                                                                    <h4>Technician</h4>
                                                                    <p>Samir Kumar Das has worked as a Technician in Gram Vikas for fourteen years. He provides support on electricals, electronics and hardware.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0028.jpg" width="300">
                                                </div>
                                                <h3>Shyam Nayak</h3>
                                                <h4>Campus Custodian</h4>
                                                <p>
                                                    Shyam Nayak has been with Gram Vikas for 32 years. He works as a Campus Custodian in Mohuda, Ganjam district. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-589">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-589" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0028.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Shyam Nayak</h3>
                                                                    <h4>Campus Custodian</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Shyam Nayak has been with Gram Vikas for 32 years. He works as a </span>
                                                                        <span style="font-weight: 400;">Campus Custodian in Mohuda, Ganjam district.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0047.jpg" width="300">
                                                </div>
                                                <h3>Simanchal Sadangi</h3>
                                                <h4>Driver</h4>
                                                <p>
                                                    Simanchal Sadangi has been working as a Driver at Gram Vikas. He has been with us for more than 30 years. He has completed his studies up to Class 9. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-591">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-591" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0047.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Simanchal Sadangi</h3>
                                                                    <h4>Driver</h4>
                                                                    <p>Simanchal Sadangi has been working as a Driver at Gram Vikas. He has been with us for more than 30 years. He has completed his studies up to Class 9.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0241.jpg" width="300">
                                                </div>
                                                <h3>Sumant Kumar Biswal</h3>
                                                <h4>Overseer - Administrative Office</h4>
                                                <p>
                                                    Sumant Kumar Biswal works as Overseer - Administrative Office in Gram Vikas, Bhubaneswar. He looks after the accommodation, fleet, guest relations, catering, cleaning, parking, security, and maintenance of the buildings in the Administrative Office, Bhubaneswar. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-599">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-599" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0241.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Sumant Kumar Biswal</h3>
                                                                    <h4>Overseer - Administrative Office</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Sumant Kumar Biswal works as </span>
                                                                        <span style="font-weight: 400;">Overseer &#8211;Administrative Office</span>
                                                                        <span style="font-weight: 400;">in Gram Vikas, Bhubaneswar. He looks after the accommodation, fleet, guest relations, catering, cleaning, parking, security, and maintenance of the buildings in the Administrative Office, Bhubaneswar. He holds a Bachelor in Hotel Management from the Central Institute of Hotel Management, Bhubaneswar, passed in 2008 and Bachelor of Arts in Economics from Udayanath Autonomous College, Adaspur, in 2005. He has worked with Centre for Youth and Social Development, Jagatsinghpur as Field Expert doing surveys and impact assessments on 1999 super cyclone for 2 years, from 2008 to 2011, he worked as a Supervisor in Mayfair Lagoon, Bhubaneswar, and as Restaurant Manager from 2011 to 2014 in Hotel Shanti Palace, New Delhi. His expertise is in hospitality management.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 t-blk">
                                            <div class="team-blk">
                                                <div class="team-img">
                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0076.jpg" width="300">
                                                </div>
                                                <h3>Tuna Das</h3>
                                                <h4>Campus Custodian</h4>
                                                <p>
                                                    Tuna Das has been working for 20 years now with Gram Vikas. He is serving as a Campus Custodian. <a href="javascript:void(0)" data-toggle="modal" data-target="#teamModal-609">READ MORE</a>
                                                </p>
                                            </div>
                                            <div class="modal fade team-modal" id="teamModal-609" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <div class="row">
                                                                <div class="col-md-4 mt-3">
                                                                    <img src="https://www.gramvikas.org/wp-content/uploads/2021/09/E0076.jpg" width="300">
                                                                </div>
                                                                <div class="col-md-8 mt-3">
                                                                    <h3>Tuna Das</h3>
                                                                    <h4>Campus Custodian</h4>
                                                                    <p>
                                                                        <span style="font-weight: 400;">Tuna Das has been working for 20 years now with Gram Vikas. He is serving as a </span>
                                                                        <span style="font-weight: 400;">Campus Custodian</span>
                                                                        <span style="font-weight: 400;">.</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row view-more-row">
                                        <div class="col-md-12 text-center" style="margin-top: 20px;">
                                            <a href="javascript:void(0)" class="v-aa">VIEW OUR BOARD</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="team-partner-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-right">
                            <h1 class="section-title">Partners</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="team-p-blk">
                                <a href="https://www.gramvikas.org/partners/">
                                    <h3>DONORS</h3>
                                </a>
                                <p>Our donors are corporates, foundations, bilateral agencies and individual philanthropists, who support solutions across our diverse areas of work and institutional development.</p>
                                <a href="https://www.gramvikas.org/partners/">VIEW ALL DONORS</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="team-p-blk">
                                <a href="https://www.gramvikas.org/partners/?i=2">
                                    <h3>GOVERNMENT</h3>
                                </a>
                                <p>Long and synergistic partnerships with state and national governments help us achieve scale and maximise the reach of benefits among the rural poor. </p>
                                <a href="https://www.gramvikas.org/partners/?i=2">VIEW ALL GOVERNMENT PARTNERS</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="team-p-blk">
                                <a href="https://www.gramvikas.org/partners/?i=3">
                                    <h3>KNOWLEDGE PARTNERS</h3>
                                </a>
                                <p>Collaborations with knowledge partners support technology solutions, improved service delivery and capacity building of teams and local institutions.</p>
                                <a href="https://www.gramvikas.org/partners/?i=3">VIEW ALL KNOWLEDGE PARTNERS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <script>
            $(function() {
                $('.v-aa').click(function() {
                    $('body, html').animate({
                        scrollTop: 0
                    }, 500);
                });
            });
        </script>
        <style media="all">
            .t-blk {
                margin-bottom: 60px;
                padding: 0 30px
            }

            .t-blk img {
                max-width: 100%;
                width: 100%
            }

            .t-blk .team-blk {
                border-bottom: 20px solid #B27C7C;
                height: 100%;
                padding: 0
            }

            .t-blk a {
                color: #740210
            }

            .team-modal h3 {
                font-size: 18px;
                line-height: 26px;
                color: #740210
            }

            .team-modal h4 {
                font-size: 18px;
                line-height: 26px;
                color: #000;
                border-bottom: 2px solid #740210;
                font-weight: 400;
                margin-bottom: 20px;
                padding-bottom: 4px
            }

            .team-modal .close {
                opacity: 1
            }

            .team-modal .close span {
                color: #740210
            }

            .team-modal p {
                border-bottom: none;
                padding-bottom: 0
            }
        </style>
        <script type="speculationrules">
            {
                "prefetch": [
                    {
                        "source": "document",
                        "where": {
                            "and": [
                                {
                                    "href_matches": "/*"
                                },
                                {
                                    "not": {
                                        "href_matches": [
                                            "/wp-*.php",
                                            "/wp-admin/*",
                                            "/wp-content/uploads/*",
                                            "/wp-content/*",
                                            "/wp-content/plugins/*",
                                            "/wp-content/themes/gramvikas/*",
                                            "/*\\?(.+)"
                                        ]
                                    }
                                },
                                {
                                    "not": {
                                        "selector_matches": "a[rel~=\"nofollow\"]"
                                    }
                                },
                                {
                                    "not": {
                                        "selector_matches": ".no-prefetch, .no-prefetch a"
                                    }
                                }
                            ]
                        },
                        "eagerness": "conservative"
                    }
                ]
            }</script>
        <div class="a2a_kit a2a_kit_size_32 a2a_floating_style a2a_vertical_style" style="right:0px;top:100px;background-color:transparent">
            <a class="a2a_button_email" href="https://www.addtoany.com/add_to/email?linkurl=https%3A%2F%2Fwww.gramvikas.org%2Four-team%2F&amp;linkname=Our%20Team%20-%20Gram%20Vikas" title="Email" rel="nofollow noopener" target="_blank"></a>
            <a class="a2a_button_linkedin" href="https://www.addtoany.com/add_to/linkedin?linkurl=https%3A%2F%2Fwww.gramvikas.org%2Four-team%2F&amp;linkname=Our%20Team%20-%20Gram%20Vikas" title="LinkedIn" rel="nofollow noopener" target="_blank"></a>
            <a class="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fwww.gramvikas.org%2Four-team%2F&amp;linkname=Our%20Team%20-%20Gram%20Vikas" title="Facebook" rel="nofollow noopener" target="_blank"></a>
            <a class="a2a_button_twitter" href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fwww.gramvikas.org%2Four-team%2F&amp;linkname=Our%20Team%20-%20Gram%20Vikas" title="Twitter" rel="nofollow noopener" target="_blank"></a>
            <a class="a2a_button_whatsapp" href="https://www.addtoany.com/add_to/whatsapp?linkurl=https%3A%2F%2Fwww.gramvikas.org%2Four-team%2F&amp;linkname=Our%20Team%20-%20Gram%20Vikas" title="WhatsApp" rel="nofollow noopener" target="_blank"></a>
            <a class="a2a_button_telegram" href="https://www.addtoany.com/add_to/telegram?linkurl=https%3A%2F%2Fwww.gramvikas.org%2Four-team%2F&amp;linkname=Our%20Team%20-%20Gram%20Vikas" title="Telegram" rel="nofollow noopener" target="_blank"></a>
        </div>
        <script type='text/javascript'>
            document.addEventListener('wpcf7mailsent', function(event) {
                if ("fb_pxl_code"in event.detail.apiResponse) {
                    eval(event.detail.apiResponse.fb_pxl_code);
                }
            }, false);
        </script>
        <div id='fb-pxl-ajax-code'></div>
        <script type="text/javascript" src="https://www.gramvikas.org/wp-includes/js/dist/hooks.min.js?ver=dd5603f07f9220ed27f1" id="wp-hooks-js"></script>
        <script type="text/javascript" src="https://www.gramvikas.org/wp-includes/js/dist/i18n.min.js?ver=c26c3dc7bed366793375" id="wp-i18n-js"></script>
        <script type="text/javascript" id="wp-i18n-js-after">
            /* <![CDATA[ */
            wp.i18n.setLocaleData({
                'text direction\u0004ltr': ['ltr']
            });
            //# sourceURL=wp-i18n-js-after
            /* ]]> */
        </script>
        <script type="text/javascript" src="https://www.gramvikas.org/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=6.1.4" id="swv-js"></script>
        <script type="text/javascript" id="contact-form-7-js-before">
            /* <![CDATA[ */
            var wpcf7 = {
                "api": {
                    "root": "https:\/\/www.gramvikas.org\/wp-json\/",
                    "namespace": "contact-form-7\/v1"
                }
            };
            //# sourceURL=contact-form-7-js-before
            /* ]]> */
        </script>
        <script type="text/javascript" src="https://www.gramvikas.org/wp-content/plugins/contact-form-7/includes/js/index.js?ver=6.1.4" id="contact-form-7-js"></script>
        <script type="text/javascript" id="sti-script-js-extra">
            /* <![CDATA[ */
            var sti_vars = {
                "ajaxurl": "https://www.gramvikas.org/wp-admin/admin-ajax.php",
                "homeurl": "https://www.gramvikas.org/",
                "selector": ".slide-img",
                "title": "",
                "summary": "",
                "short_url": "false",
                "url_structure": "/%postname%/",
                "minWidth": "200",
                "minHeight": "200",
                "sharer": "https://www.gramvikas.org/wp-content/plugins/share-this-image/sharer.php",
                "position": "image",
                "analytics": "",
                "buttons": {
                    "desktop": ["facebook", "twitter", "linkedin", "pinterest"],
                    "icons": {
                        "facebook": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath d=\"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z\"/\u003E\u003C/svg\u003E",
                        "twitter": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"\u003E\u003Cpath d=\"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z\"/\u003E\u003C/svg\u003E",
                        "linkedin": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath d=\"M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z\"/\u003E\u003C/svg\u003E",
                        "pinterest": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"\u003E\u003Cpath d=\"M12.14.5C5.86.5 2.7 5 2.7 8.75c0 2.27.86 4.3 2.7 5.05.3.12.57 0 .66-.33l.27-1.06c.1-.32.06-.44-.2-.73-.52-.62-.86-1.44-.86-2.6 0-3.33 2.5-6.32 6.5-6.32 3.55 0 5.5 2.17 5.5 5.07 0 3.8-1.7 7.02-4.2 7.02-1.37 0-2.4-1.14-2.07-2.54.4-1.68 1.16-3.48 1.16-4.7 0-1.07-.58-1.98-1.78-1.98-1.4 0-2.55 1.47-2.55 3.42 0 1.25.43 2.1.43 2.1l-1.7 7.2c-.5 2.13-.08 4.75-.04 5 .02.17.22.2.3.1.14-.18 1.82-2.26 2.4-4.33.16-.58.93-3.63.93-3.63.45.88 1.8 1.65 3.22 1.65 4.25 0 7.13-3.87 7.13-9.05C20.5 4.15 17.18.5 12.14.5z\"/\u003E\u003C/svg\u003E",
                        "mobile": "\u003Csvg enable-background=\"new 0 0 64 64\" version=\"1.1\" viewBox=\"0 0 64 64\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\u003E\u003Cpath d=\"M48,39.26c-2.377,0-4.515,1-6.033,2.596L24.23,33.172c0.061-0.408,0.103-0.821,0.103-1.246c0-0.414-0.04-0.818-0.098-1.215  l17.711-8.589c1.519,1.609,3.667,2.619,6.054,2.619c4.602,0,8.333-3.731,8.333-8.333c0-4.603-3.731-8.333-8.333-8.333  s-8.333,3.73-8.333,8.333c0,0.414,0.04,0.817,0.098,1.215l-17.711,8.589c-1.519-1.609-3.666-2.619-6.054-2.619  c-4.603,0-8.333,3.731-8.333,8.333c0,4.603,3.73,8.333,8.333,8.333c2.377,0,4.515-1,6.033-2.596l17.737,8.684  c-0.061,0.407-0.103,0.821-0.103,1.246c0,4.603,3.731,8.333,8.333,8.333s8.333-3.73,8.333-8.333C56.333,42.99,52.602,39.26,48,39.26  z\"/\u003E\u003C/svg\u003E"
                    },
                    "mobile": ["facebook", "twitter", "linkedin", "pinterest"]
                },
                "twitterVia": "",
                "appId": "",
                "zIndex": "9999999999999999",
                "custom_data": []
            };
            //# sourceURL=sti-script-js-extra
            /* ]]> */
        </script>
        <script type="text/javascript" src="https://www.gramvikas.org/wp-content/plugins/share-this-image/assets/js/sti.min.js?ver=2.09" id="sti-script-js"></script>
        <script type="text/javascript" src="https://www.gramvikas.org/wp-includes/js/jquery/ui/core.min.js?ver=1.13.3" id="jquery-ui-core-js"></script>
        <script type="text/javascript" src="https://www.gramvikas.org/wp-includes/js/jquery/ui/tabs.min.js?ver=1.13.3" id="jquery-ui-tabs-js"></script>
        <script type="text/javascript" id="flowplayer-js-extra">
            /* <![CDATA[ */
            var fv_flowplayer_conf = {
                "fv_fullscreen": "1",
                "swf": "//www.gramvikas.org/wp-content/plugins/fv-wordpress-flowplayer/flowplayer/flowplayer.swf?ver=7.5.49.7212",
                "swfHls": "//www.gramvikas.org/wp-content/plugins/fv-wordpress-flowplayer/flowplayer/flowplayerhls.swf?ver=7.5.49.7212",
                "speeds": [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
                "video_hash_links": "1",
                "safety_resize": "1",
                "volume": "0.7",
                "default_volume": "0.7",
                "mobile_landscape_fullscreen": "1",
                "sticky_video": "",
                "sticky_place": "right-bottom",
                "sticky_min_width": "1020",
                "script_hls_js": "https://www.gramvikas.org/wp-content/plugins/fv-wordpress-flowplayer/flowplayer/hls.min.js?ver=1.4.10",
                "script_dash_js": "https://www.gramvikas.org/wp-content/plugins/fv-wordpress-flowplayer/flowplayer/flowplayer.dashjs.min.js?ver=7.5.49.7212-3.2.2-mod",
                "chromecast": "",
                "fv_chromecast": {
                    "applicationId": "908E271B"
                },
                "hlsjs": {
                    "startLevel": -1,
                    "fragLoadingMaxRetry": 3,
                    "levelLoadingMaxRetry": 3,
                    "capLevelToPlayerSize": true
                },
                "fv_stats": {
                    "url": "https://www.gramvikas.org/wp-content/plugins/fv-wordpress-flowplayer/controller/track.php",
                    "blog_id": 1,
                    "user_id": 0
                },
                "youtube": "1"
            };
            var fv_player = {
                "ajaxurl": "https://www.gramvikas.org/wp-admin/admin-ajax.php"
            };
            var fv_flowplayer_translations = {
                "0": "",
                "1": "Video loading aborted",
                "2": "Network error",
                "3": "Video not properly encoded",
                "4": "Video file not found",
                "5": "Unsupported video",
                "6": "Skin not found",
                "7": "SWF file not found",
                "8": "Subtitles not found",
                "9": "Invalid RTMP URL",
                "10": "Unsupported video format.",
                "11": "Click to watch the video",
                "12": "[This post contains video, click to play]",
                "video_expired": "\u003Ch2\u003EVideo file expired.\u003Cbr /\u003EPlease reload the page and play it again.\u003C/h2\u003E",
                "unsupported_format": "\u003Ch2\u003EUnsupported video format.\u003Cbr /\u003EPlease use a Flash compatible device.\u003C/h2\u003E",
                "mobile_browser_detected_1": "Mobile browser detected, serving low bandwidth video.",
                "mobile_browser_detected_2": "Click here for full quality",
                "live_stream_failed": "\u003Ch2\u003ELive stream load failed.\u003C/h2\u003E\u003Ch3\u003EPlease try again later, perhaps the stream is currently offline.\u003C/h3\u003E",
                "live_stream_failed_2": "\u003Ch2\u003ELive stream load failed.\u003C/h2\u003E\u003Ch3\u003EPlease try again later, perhaps the stream is currently offline.\u003C/h3\u003E",
                "what_is_wrong": "Please tell us what is wrong :",
                "full_sentence": "Please give us more information (a full sentence) so we can help you better",
                "error_JSON": "Admin: Error parsing JSON",
                "no_support_IE9": "Admin: Video checker doesn't support IE 9.",
                "check_failed": "Admin: Check failed.",
                "playlist_current": "Now Playing",
                "playlist_item_no": "Item %d.",
                "playlist_play_all": "Play All",
                "playlist_play_all_button": "All",
                "playlist_replay_all": "Replay Playlist",
                "playlist_replay_video": "Repeat Track",
                "playlist_shuffle": "Shuffle Playlist",
                "video_issues": "Video Issues",
                "video_reload": "Video loading has stalled, click to reload",
                "link_copied": "Video Link Copied to Clipboard",
                "live_stream_starting": "\u003Ch2\u003ELive stream scheduled\u003C/h2\u003E\u003Cp\u003EStarting in \u003Cspan\u003E%d\u003C/span\u003E.\u003C/p\u003E",
                "live_stream_retry": "\u003Ch2\u003EWe are sorry, currently no live stream available.\u003C/h2\u003E\u003Cp\u003ERetrying in \u003Cspan\u003E%d\u003C/span\u003E ...\u003C/p\u003E",
                "live_stream_continue": "\u003Ch2\u003EIt appears the stream went down.\u003C/h2\u003E\u003Cp\u003ERetrying in \u003Cspan\u003E%d\u003C/span\u003E ...\u003C/p\u003E",
                "embed_copied": "Embed Code Copied to Clipboard",
                "error_copy_clipboard": "Error copying text into clipboard!",
                "subtitles_disabled": "Subtitles disabled",
                "subtitles_switched": "Subtitles switched to ",
                "warning_iphone_subs": "This video has subtitles, that are not supported on your device.",
                "warning_unstable_android": "You are using an old Android device. If you experience issues with the video please use \u003Ca href=\"https://play.google.com/store/apps/details?id=org.mozilla.firefox\"\u003EFirefox\u003C/a\u003E.",
                "warning_samsungbrowser": "You are using the Samsung Browser which is an older and buggy version of Google Chrome. If you experience issues with the video please use \u003Ca href=\"https://www.mozilla.org/en-US/firefox/new/\"\u003EFirefox\u003C/a\u003E or other modern browser.",
                "warning_old_safari": "You are using an old Safari browser. If you experience issues with the video please use \u003Ca href=\"https://www.mozilla.org/en-US/firefox/new/\"\u003EFirefox\u003C/a\u003E or other modern browser.",
                "warning_old_chrome": "You are using an old Chrome browser. Please make sure you use the latest version.",
                "warning_old_firefox": "You are using an old Firefox browser. Please make sure you use the latest version.",
                "warning_old_ie": "You are using a deprecated browser. If you experience issues with the video please use \u003Ca href=\"https://www.mozilla.org/en-US/firefox/new/\"\u003EFirefox\u003C/a\u003E or other modern browser.",
                "quality": "Quality",
                "closed_captions": "Closed Captions",
                "no_subtitles": "No subtitles",
                "speed": "Speed",
                "duration_1_day": "%s day",
                "duration_n_days": "%s days",
                "duration_1_hour": "%s hour",
                "duration_n_hours": "%s hours",
                "duration_1_minute": "%s min",
                "duration_n_minutes": "%s mins",
                "duration_1_second": "%s second",
                "duration_n_seconds": "%s seconds",
                "and": " and ",
                "chrome_extension_disable_html5_autoplay": "It appears you are using the Disable HTML5 Autoplay Chrome extension, disable it to play videos",
                "click_to_unmute": "Click to unmute",
                "audio_button": "AUD",
                "audio_menu": "Audio",
                "iphone_swipe_up_location_bar": "To enjoy fullscreen swipe up to hide location bar.",
                "invalid_youtube": "Invalid Youtube video ID.",
                "redirection": "Admin note:\n\nThis player is set to redirect to a URL at the end of the video:\n\n%url%\n\nWould you like to be redirected?\n\nThis note only shows to logged in Administrators and Editors for security reasons, other users are redirected without any popup or confirmation.",
                "video_loaded": "Video loaded, click to play."
            };
            var fv_flowplayer_playlists = [];
            //# sourceURL=flowplayer-js-extra
            /* ]]> */
        </script>
        <script type="text/javascript" src="https://www.gramvikas.org/wp-content/plugins/fv-wordpress-flowplayer/flowplayer/modules/flowplayer.min.js?ver=7.2.12.4" id="flowplayer-js"></script>
        <script type="text/javascript" src="https://www.gramvikas.org/wp-content/plugins/fv-wordpress-flowplayer/flowplayer/fv-player.min.js?ver=7.5.49.7212" id="fv-player-js"></script>
        <script type="text/javascript" src="https://www.gramvikas.org/wp-content/plugins/fv-wordpress-flowplayer/flowplayer/hls.min.js?ver=1.4.10" id="flowplayer-hlsjs-js"></script>
        <script type="text/javascript" src="https://www.gramvikas.org/wp-content/plugins/fv-wordpress-flowplayer/flowplayer/flowplayer.dashjs.min.js?ver=7.5.49.7212-3.2.2-mod" id="flowplayer-dash-js"></script>
        <script type="text/javascript" src="https://www.gramvikas.org/wp-content/plugins/fv-wordpress-flowplayer/flowplayer/fv-player-youtube.min.js?ver=7.5.49.7212" id="fv-player-youtube-js"></script>
        <script type="text/javascript" id="fv_player_lightbox-js-extra">
            /* <![CDATA[ */
            var fv_player_lightbox = {
                "lightbox_images": ""
            };
            //# sourceURL=fv_player_lightbox-js-extra
            /* ]]> */
        </script>
        <script type="text/javascript" src="https://www.gramvikas.org/wp-content/plugins/fv-wordpress-flowplayer/js/fancybox.js?ver=7.5.49.7212" id="fv_player_lightbox-js"></script>
        <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" class="fvp-icon" xmlns="https://www.w3.org/2000/svg">
            <defs>
                <g id="fvp-playlist">
                    <path class="svg-color" d="M4.972,44.723C2.984,42.668,2,40.282,2,37.543v-35.9h14.36v31.792h37.345V18.057l24.629,22.574 		L53.704,63.19V47.813H12.26C9.388,47.813,6.95,46.778,4.972,44.723z"/>
                </g>
                <g id="fvp-playlist-play">
                    <rect class="svg-color" x="23.586" y="3.15" width="61.164" height="10.187"/>
                    <rect class="svg-color" x="23.586" y="43.934" width="61.164" height="10.186"/>
                    <rect class="svg-color" x="43.158" y="23.544" width="41.592" height="10.184"/>
                    <polygon class="svg-color" points="2.5,9.351 2.5,47.919 33.858,28.698 	"/>
                </g>
                <g id="fvp-replay-list">
                    <path class="svg-color" d="M48.928,50.465h27.599l-1.523,26.074l-8.122-8.305c-3.784,3.645-8.062,6.352-12.861,8.121		c-4.784,1.769-9.63,2.646-14.553,2.646c-4.907,0-9.737-0.938-14.46-2.83c-4.722-1.893-8.984-4.724-12.752-8.506		c-3.277-3.278-5.8-6.847-7.569-10.677c-1.753-3.847-2.892-7.846-3.4-12.015l9.646-0.369c1,6.291,3.768,11.722,8.307,16.245		c2.784,2.783,5.922,4.891,9.46,6.338c3.523,1.446,7.123,2.169,10.769,2.169c3.661,0,7.245-0.662,10.783-1.985		c3.523-1.322,6.739-3.308,9.63-5.952L48.928,50.465z M4.87,3.961l8.137,8.307c3.907-3.646,8.215-6.353,12.953-8.122		C30.683,2.377,35.498,1.5,40.421,1.5c4.906,0,9.723,0.938,14.459,2.831c4.725,1.893,8.97,4.738,12.754,8.507		c3.277,3.154,5.8,6.692,7.568,10.583c1.755,3.908,2.954,7.938,3.586,12.107l-9.831,0.184c-1-6.168-3.785-11.522-8.323-16.06		c-2.769-2.77-5.921-4.893-9.444-6.338s-7.124-2.169-10.769-2.169c-3.661,0-7.245,0.662-10.784,1.985		c-3.522,1.322-6.738,3.307-9.645,5.953L30.96,29.851L3.362,30.036L4.87,3.961z"/>
                </g>
                <g id="fvp-replay-track">
                    <path class="svg-color" d="M35.069,1.699c4.643,0,9.001,0.852,13.09,2.568c4.082,1.703,7.651,4.042,10.686,7.015		c3.034,2.987,5.468,6.475,7.285,10.502c1.825,4.015,2.791,8.286,2.906,12.8h10.131l-15.18,17.113L48.774,34.585H60.73		c-0.115-3.433-0.858-6.637-2.251-9.624c-1.386-3.001-3.251-5.596-5.582-7.813c-2.332-2.217-5.028-3.96-8.083-5.231		s-6.306-1.906-9.746-1.906c-3.555,0-6.86,0.662-9.915,1.987c-3.055,1.325-5.751,3.163-8.083,5.488		c-2.332,2.325-4.164,5.028-5.501,8.137c-1.332,3.095-1.994,6.42-1.994,9.962c0,3.541,0.662,6.84,1.994,9.881		c1.325,3.055,3.149,5.73,5.481,8.056c2.325,2.325,5.008,4.149,8.049,5.488c3.048,1.324,6.339,1.986,9.887,1.986		c5.751,0,10.793-1.662,15.112-4.987l5.812,6.312c-2.879,2.217-6.089,3.987-9.631,5.325c-3.548,1.325-7.305,1.987-11.293,1.987		c-4.649,0-9.029-0.879-13.125-2.649s-7.684-4.19-10.766-7.285c-3.075-3.096-5.488-6.719-7.225-10.854		C2.135,44.696,1.27,40.303,1.27,35.667c0-4.744,0.878-9.165,2.649-13.247c1.764-4.095,4.197-7.677,7.292-10.773		c3.089-3.095,6.677-5.528,10.766-7.299C26.066,2.591,30.426,1.699,35.069,1.699z"/>
                </g>
                <g id="fvp-shuffle">
                    <path class="svg-color" d="M60.216,22.676c-2.176,0-4.198,0.417-6.064,1.24c-1.858,0.835-3.624,1.973-5.28,3.427		c-1.656,1.455-3.263,3.137-4.818,5.046c-1.557,1.923-3.105,3.908-4.661,5.982c-1.764,2.39-3.629,4.742-5.596,7.07		c-1.967,2.34-4.142,4.489-6.526,6.45c-2.384,1.973-5.002,3.554-7.848,4.743c-2.852,1.188-6.09,1.782-9.713,1.782H1.626V47.542		h8.082c2.277,0,4.351-0.405,6.216-1.24c1.866-0.835,3.624-1.974,5.28-3.415c1.657-1.454,3.263-3.136,4.819-5.059		c1.556-1.91,3.111-3.908,4.667-5.982c1.758-2.378,3.624-4.769,5.59-7.146c1.967-2.39,4.123-4.527,6.45-6.45		c2.333-1.922,4.921-3.465,7.772-4.667c2.846-1.188,6.083-1.783,9.713-1.783h2.795V2.478l16.322,13.988L63.011,30.442v-7.766H60.216		z M22.608,29.518c-1.765-1.872-3.68-3.339-5.754-4.426c-2.074-1.088-4.452-1.631-7.146-1.631H1.626v-10.89h8.082		c4.244,0,7.949,0.809,11.111,2.415c3.162,1.607,6.033,3.605,8.625,5.982c-0.936,1.037-1.79,2.075-2.567,3.111		c-0.772,1.037-1.581,2.011-2.41,2.947c-0.31,0.518-0.62,0.961-0.929,1.328C23.228,28.709,22.918,29.101,22.608,29.518z		 M63.011,40.547l16.322,13.987L63.011,68.523v-9.321h-2.795c-4.351,0-8.132-0.859-11.345-2.566		c-3.213-1.708-6.166-3.858-8.859-6.451c1.037-1.239,2.023-2.454,2.953-3.655c0.93-1.188,1.809-2.353,2.644-3.491		c0.202-0.201,0.386-0.442,0.544-0.695c0.151-0.265,0.335-0.543,0.544-0.859c1.967,2.074,4.04,3.73,6.216,4.97		c2.176,1.24,4.61,1.872,7.304,1.872h2.795V40.547z"/>
                </g>
                <g id="fvp-nopicture">
                    <title id="fvp-hidepic">Hide picture</title>
                    <path class="svg-color" fill-rule="evenodd" clip-rule="evenodd" d="M84.069,8.698c-1.358-1.945-19.374-7.091-39.067-7.091	c-19.51,0-36.575,5.161-38.318,7.091S1.671,22.833,1.671,39.893c0,17.241,2.881,29.125,5.013,31.285s18.989,7.215,38.59,7.215	c19.602,0,36.903-5.125,38.794-7.215s4.696-14.089,4.696-31.238C88.766,22.786,85.428,10.644,84.069,8.698z M67.653,58.217	l-4.216,4.22l-18.219-18.22L27.001,62.436l-4.217-4.219L41.003,40L22.784,21.781l4.217-4.217l18.218,18.218l18.219-18.218	l4.216,4.217L49.437,40L67.653,58.217z"/>
                </g>
            </defs>
        </svg>
        <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" class="fvp-icon" xmlns="https://www.w3.org/2000/svg">
            <g id="fvp-rewind">
                <path d="M22.7 10.9c0 1.7-0.4 3.3-1.1 4.8 -0.7 1.5-1.8 2.8-3.2 3.8 -0.4 0.3-1.3-0.9-0.9-1.2 1.2-0.9 2.1-2 2.7-3.3 0.7-1.3 1-2.7 1-4.1 0-2.6-0.9-4.7-2.7-6.5 -1.8-1.8-4-2.7-6.5-2.7 -2.5 0-4.7 0.9-6.5 2.7 -1.8 1.8-2.7 4-2.7 6.5 0 2.4 0.8 4.5 2.5 6.3 1.7 1.8 3.7 2.7 6.1 2.9l-1.2-2c-0.2-0.3 0.9-1 1.1-0.7l2.3 3.7c0.2 0.3 0 0.6-0.2 0.7L9.5 23.8c-0.3 0.2-0.9-0.9-0.5-1.2l2.1-1.1c-2.7-0.2-5-1.4-6.9-3.4 -1.9-2-2.8-4.5-2.8-7.2 0-3 1.1-5.5 3.1-7.6C6.5 1.2 9 0.2 12 0.2c3 0 5.5 1.1 7.6 3.1C21.7 5.4 22.7 7.9 22.7 10.9z"/>
                <path d="M8.1 15.1c-0.1 0-0.1 0-0.1-0.1V8C8 7.7 7.8 7.9 7.7 7.9L6.8 8.3C6.8 8.4 6.7 8.3 6.7 8.2L6.3 7.3C6.2 7.2 6.3 7.1 6.4 7.1l2.7-1.2c0.1 0 0.4 0 0.4 0.3v8.8c0 0.1 0 0.1-0.1 0.1H8.1z"/>
                <path d="M17.7 10.6c0 2.9-1.3 4.7-3.5 4.7 -2.2 0-3.5-1.8-3.5-4.7s1.3-4.7 3.5-4.7C16.4 5.9 17.7 7.7 17.7 10.6zM12.3 10.6c0 2.1 0.7 3.4 2 3.4 1.3 0 2-1.2 2-3.4 0-2.1-0.7-3.4-2-3.4C13 7.2 12.3 8.5 12.3 10.6z"/>
            </g>
        </svg>
        <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" class="fvp-icon" xmlns="https://www.w3.org/2000/svg">
            <g id="fvp-forward">
                <path d="M22.7 10.9c0 1.7-0.4 3.3-1.1 4.8 -0.7 1.5-1.8 2.8-3.2 3.8 -0.4 0.3-1.3-0.9-0.9-1.2 1.2-0.9 2.1-2 2.7-3.3 0.7-1.3 1-2.7 1-4.1 0-2.6-0.9-4.7-2.7-6.5 -1.8-1.8-4-2.7-6.5-2.7 -2.5 0-4.7 0.9-6.5 2.7 -1.8 1.8-2.7 4-2.7 6.5 0 2.4 0.8 4.5 2.5 6.3 1.7 1.8 3.7 2.7 6.1 2.9l-1.2-2c-0.2-0.3 0.9-1 1.1-0.7l2.3 3.7c0.2 0.3 0 0.6-0.2 0.7L9.5 23.8c-0.3 0.2-0.9-0.9-0.5-1.2l2.1-1.1c-2.7-0.2-5-1.4-6.9-3.4 -1.9-2-2.8-4.5-2.8-7.2 0-3 1.1-5.5 3.1-7.6C6.5 1.2 9 0.2 12 0.2c3 0 5.5 1.1 7.6 3.1C21.7 5.4 22.7 7.9 22.7 10.9z" transform="scale(-1,1) translate(-24,0)"/>
                <path d="M8.1 15.1c-0.1 0-0.1 0-0.1-0.1V8C8 7.7 7.8 7.9 7.7 7.9L6.8 8.3C6.8 8.4 6.7 8.3 6.7 8.2L6.3 7.3C6.2 7.2 6.3 7.1 6.4 7.1l2.7-1.2c0.1 0 0.4 0 0.4 0.3v8.8c0 0.1 0 0.1-0.1 0.1H8.1z"/>
                <path d="M17.7 10.6c0 2.9-1.3 4.7-3.5 4.7 -2.2 0-3.5-1.8-3.5-4.7s1.3-4.7 3.5-4.7C16.4 5.9 17.7 7.7 17.7 10.6zM12.3 10.6c0 2.1 0.7 3.4 2 3.4 1.3 0 2-1.2 2-3.4 0-2.1-0.7-3.4-2-3.4C13 7.2 12.3 8.5 12.3 10.6z"/>
            </g>
        </svg>
        <div id="cookie-notice" role="dialog" class="cookie-notice-hidden cookie-revoke-hidden cn-position-bottom" aria-label="Cookie Notice" style="background-color: rgba(196,196,196,1);">
            <div class="cookie-notice-container" style="color: #3c3c3c">
                <span id="cn-notice-text" class="cn-text-container">We use cookies to improve your experience of our website. By continuing to use the site, you agree to the placement of these cookies. Read our updated Privacy Policy to learn more. </span>
                <span id="cn-notice-buttons" class="cn-buttons-container">
                    <button id="cn-accept-cookie" data-cookie-set="accept" class="cn-set-cookie cn-button cn-button-custom cookie-btn" aria-label="I AGREE">I AGREE</button>
                </span>
                <button type="button" id="cn-close-notice" data-cookie-set="accept" class="cn-close-icon" aria-label="No"></button>
            </div>
        </div>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 footer-1">
                        <div class="first-blk">
                            <h5>CONTACT US</h5>
                            <p>
                                Gram Vikas, Plot No. 72/B, Forest Park<br>
                                Bhubaneswar - 751009,  Odisha, India<br>
                                +91-674-2596366<br>info@gramvikas.org
                    
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 footer-2">
                        <div class="second-blk">
                            <h5>STAY UPDATED</h5>
                            <div class="wpcf7 no-js" id="wpcf7-f1066-o1" lang="en-US" dir="ltr" data-wpcf7-id="1066">
                                <div class="screen-reader-response">
                                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                                    <ul></ul>
                                </div>
                                <form action="/our-team/#wpcf7-f1066-o1" method="post" class="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init">
                                    <fieldset class="hidden-fields-container">
                                        <input type="hidden" name="_wpcf7" value="1066"/>
                                        <input type="hidden" name="_wpcf7_version" value="6.1.4"/>
                                        <input type="hidden" name="_wpcf7_locale" value="en_US"/>
                                        <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f1066-o1"/>
                                        <input type="hidden" name="_wpcf7_container_post" value="0"/>
                                        <input type="hidden" name="_wpcf7_posted_data_hash" value=""/>
                                    </fieldset>
                                    <div class="subscription-blk">
                                        <p>
                                            <span class="wpcf7-form-control-wrap" data-name="your-email">
                                                <input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Email" value="" type="text" name="your-email"/>
                                            </span>
                                            <br/>
                                            <input class="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="SUBMIT"/>
                                        </p>
                                    </div>
                                    <div class="wpcf7-response-output" aria-hidden="true"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 footer-3">
                        <ul class="links-list">
                            <li>
                                <a href="https://www.gramvikas.org/blog/">BLOG
                        </a>
                            </li>
                            <li>
                                <a href="https://www.gramvikas.org/partners/">PARTNERS
                        </a>
                            </li>
                            <li>
                                <a href="https://www.gramvikas.org/library/">LIBRARY
                        </a>
                            </li>
                            <li>
                                <a href="https://www.gramvikas.org/donation-form-1/">DONATE
                        </a>
                            </li>
                            <li>
                                <a href="https://www.gramvikas.org/volunteer/">VOLUNTEER
                        </a>
                            </li>
                            <li>
                                <a href="https://www.gramvikas.org/history-page/">HISTORY
                        </a>
                            </li>
                            <li>
                                <a href="https://www.gramvikas.org/visit-us/">VISIT US
                        </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row media-list">
                    <div class="col-md-12">
                        <a href="https://www.gramvikas.org/privacy-page/" target="_blank" class="privacy-l">Privacy Policy</a>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/company/gram-vikas-gv/?viewAsMember=true" target="_blank">
                                    <img src="https://www.gramvikas.org/wp-content/themes/gramvikas/img/media-icon/1.svg">
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/gramvikasodisha/" target="_blank">
                                    <img src="https://www.gramvikas.org/wp-content/themes/gramvikas/img/media-icon/2.svg">
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/gramvikasodisha/" target="_blank">
                                    <img src="https://www.gramvikas.org/wp-content/themes/gramvikas/img/media-icon/5.svg">
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/GramVikasIN" target="_blank">
                                    <img src="https://www.gramvikas.org/wp-content/themes/gramvikas/img/media-icon/3.svg">
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCVGjjrm0NiDe2l4lI1_A0-A?view_as=subscriber" target="_blank">
                                    <img src="https://www.gramvikas.org/wp-content/themes/gramvikas/img/media-icon/4.svg">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copyright-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <p>
                                All our content is free to be used, shared or republished with due acknowledgement except for photographs and videos. Use of images is governed by the Creative Commons license Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0). Read the terms of our <a href=" https://www.gramvikas.org/wp-content/uploads/2021/05/Gram-Vikas_-Ethical-Image-Production-Use-1-1.pdf" target="_blank" style="font-size: 12px;">Ethical Image Production & Use. </a>
                            </p>
                        </div>
                        <div class="col-md-4 text-right">
                            <p>
                                Designed by <a href="https://www.twistopen.in/" target="_blank" style="font-size: 12px;">Twist Open</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <script>
            $(function() {
                $('.radio-field label').click(function() {
                    var x = $(this).find('input').prop('checked');
                    if (x) {
                        $('.radio-field label').find('span').removeClass('active');
                        $(this).find('span').addClass('active');
                    }
                });

                $('.checkbox-field label').click(function() {
                    var x = $(this).find('input').prop('checked');
                    if (x) {
                        $(this).find('i').addClass('active');
                    } else {
                        $(this).find('i').removeClass('active');
                    }
                });

                // $('.d-f-img').click(function () {
                //     if($(this).parents().hasClass('donation-focus-blk')){
                //         $('.d-f-img').closest('.donation-focus-blk').find('i').removeClass('active');
                //         $(this).closest('.donation-focus-blk').find('i').addClass('active');
                //     } else if($(this).parents().hasClass('col-md-7')){
                //         $('.d-f-img').closest('div').find('i').removeClass('active');
                //         $(this).closest('div').find('i').addClass('active');
                //     }
                //     if($(this).parents().hasClass('select-focus-area-section')){
                //         $('.addfocusarea').text('');
                //         $('.wpcf7-form-control-wrap.focusarea input').val($(this).find('h3').text());
                //         $('.wpcf7-form-control-wrap.campaign input').val('No');
                //     }
                //     if($(this).parents().hasClass('select-detailed-dis')){
                //         $('.wpcf7-form-control-wrap.campaign input').val('Natural Disaster');
                //         $('.wpcf7-form-control-wrap.focusarea input').val('No');
                //     }
                // });

                $('.donation-focus-blk label, .select-detailed-dis-img label').click(function() {
                    //   $(this).closest('.donation-focus-blk').find('.d-f-img').trigger('click');

                    if ($(this).parents().hasClass('donation-focus-blk')) {
                        $('.d-f-img').closest('.row').find('i').removeClass('active');
                        $(this).closest('.donation-focus-blk').find('i').addClass('active');
                    } else if ($(this).parents().hasClass('col-md-7')) {
                        $('.d-f-img').closest('.row').find('i').removeClass('active');
                        $(this).closest('div').find('i').addClass('active');
                    }
                    if ($(this).parents().hasClass('select-focus-area-section')) {
                        $('.addfocusarea').text('');
                        $('.wpcf7-form-control-wrap.focusarea input').val($(this).closest('.donation-focus-blk').find('h3').text());
                        $('.wpcf7-form-control-wrap.campaign input').val('No');
                    }
                    if ($(this).parents().hasClass('select-detailed-dis')) {
                        $('.wpcf7-form-control-wrap.campaign input').val('Natural Disaster');
                        $('.wpcf7-form-control-wrap.focusarea input').val('No');
                    }

                });

                $('table').wrap('<div class="table-responsive"></div>');

                // $('.wp-caption-text').each(function () {
                //     var str = $(this).html();
                //     var str_array = str.split('<br>');
                //     for(var i = 0; i < str_array.length; i++) {
                //         // Trim the excess whitespace.
                //         str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
                //         // Add additional code here, such as:
                //     }
                //     $(this).html(str_array[0] +'<span>'+str_array[1]+'</span>');
                // });

            })
        </script>
        <script>
            document.cookie = "gramvikas_filter_cat=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "gramvikas_field_type=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        </script>
        <style media="all">
            .cookie-btn {
                color: #fff;
                background-color: #3C3C3C;
                display: inline-block;
                padding: 3px 10px;
                border-radius: 4px
            }

            .cookie-btn:hover {
                color: #fff
            }
        </style>
    </body>
</html>
