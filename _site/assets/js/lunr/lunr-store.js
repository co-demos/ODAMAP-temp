var store = [{
        "title": "OVERVIEW",
        "excerpt":"Visualize data from JSON files in an interactive dashboard. MAIN FEATURES ODAMAP includes “out-the-box” a website generator to create an original datavisualisation website from scratch. ODAMAP main features are the following : map views ; chart views ; mobile responsive ; internationalization ; ability to load external text contents ;...","categories": ["general"],
        "tags": ["documentation","configuration","deployment"],
        "url": "http://localhost:4000/general/overview/",
        "teaser": null
      },{
        "title": "SCREENSHOTS",
        "excerpt":"  DESKTOP VIEW            MOBILE VIEW            AS IFRAME                   ","categories": ["general"],
        "tags": ["documentation","configuration","deployment"],
        "url": "http://localhost:4000/general/screenshots/",
        "teaser": null
      },{
        "title": "GALLERY",
        "excerpt":"The following websites are using ODAMAP : About Covid-19 Etalab sandbox : aides-entreprises Portail Gouvernement / COVID website Portail Ministère de l’Economie / Report d’échéances fiscales Portail Ministère de l’Economie / Prêt garanti par l’Etat Portail Ministère de l’Economie / Aide du Fonds de solidarité Other datasets Etalab sandbox :...","categories": ["general"],
        "tags": ["documentation","examples","galery"],
        "url": "http://localhost:4000/general/gallery/",
        "teaser": null
      },{
        "title": "CONFIGURE YOUR ODAMAP INSTANCE",
        "excerpt":"Configure your ODAMAP instance What you have to know The .env file manages the first level of customization. It allows you to override some parameters, set the running mode of your app, set some default colors, set the languages you want, etc… Those variables are loaded indirectly in nuxt.config.js, via...","categories": ["configuration"],
        "tags": ["documentation","tutorial","configuration","installation"],
        "url": "http://localhost:4000/configuration/config-configs/",
        "teaser": null
      },{
        "title": "CONFIGURE YOUR ENVIRONMENT VARIABLES",
        "excerpt":"Configure your ODAMAP instance’s environment variables What you have to know The .env file manages the first level of customization. It allows you to override some parameters, set the running mode of your app, set some default colors, set the languages you want, etc… Those variables are loaded indirectly in...","categories": ["configuration"],
        "tags": ["documentation","tutorial","configuration","installation"],
        "url": "http://localhost:4000/configuration/config-envfile/",
        "teaser": null
      },{
        "title": "CONFIGURE YOUR LOCALES",
        "excerpt":"Configure your ODAMAP locales What you have to know You can set several languages for your ODAMAP instance. After having set in the .env file which languages you want to use, the files contained in the frontend/locales folder will allow you to translate the default fields of nuxt components (or...","categories": ["configuration"],
        "tags": ["documentation","tutorial","configuration","installation","internationalization"],
        "url": "http://localhost:4000/configuration/config-locales/",
        "teaser": null
      },{
        "title": "CONFIGURATION OVERVIEW",
        "excerpt":"Modules Frontend modules overview Configure your ODAMAP instance What you have to know Your ODAMAP instance is fully configurable. So you can change either the texts, the translation, the data you want to display, the routes you want for your website, etc… To configure your instance you need to differenciate...","categories": ["configuration"],
        "tags": ["documentation","tutorial","configuration","installation"],
        "url": "http://localhost:4000/configuration/config-overview/",
        "teaser": null
      },{
        "title": "MANAGE THE DATASETS YOU WANT TO DISPLAY",
        "excerpt":"Configure your ODAMAP datasets What you have to know Your ODAMAP instance is fully configurable. So you can change either the texts, the translation, the data you want to display, the routes you want for your website, etc… ODAMAP frontend/static folder’s structure frontend │ README.md │ .env │ └─── static...","categories": ["configuration"],
        "tags": ["documentation","tutorial","configuration","installation"],
        "url": "http://localhost:4000/configuration/config-static/",
        "teaser": null
      },{
        "title": "URL PARAMETERS",
        "excerpt":"Use the ODAMAP url’s parameters What you have to know Your ODAMAP instance uses a router, which you can pass parameters to. Global url parameters Those parameters don’t rely on the datasets or connfiguration you will use. They still can be overriden with your .env file (more on that topic...","categories": ["configuration"],
        "tags": ["documentation","tutorial","configuration","installation"],
        "url": "http://localhost:4000/configuration/config-url-params/",
        "teaser": null
      },{
        "title": "INSTALLATION WALKTHROUGH",
        "excerpt":"Shortcut Time is precious. The quickest way to install and run ODAMAP on your computer for development : ### clone the repository git clone https://github.com/etalab/dashboard-aides-entreprises.git ### go to frontend folder and copy default environment variables cd frontend cp .envExample .env ### shortcut to install ODAMAP npm install npm run dev...","categories": ["guide"],
        "tags": ["documentation","tutorial","configuration","installation"],
        "url": "http://localhost:4000/guide/installation/",
        "teaser": null
      },{
        "title": "DEPLOYMENT CONFIGURATIONS",
        "excerpt":" Deployment on Netlify   section Build &amp; deploy  :   Continuous Deployment / Build settings     Repository : github.com/etalab/dashboard-aides-entreprises   Build command : npm run build   Publish directory : dist   Continuous Deployment / Deply contexts     Production branch : master   Environment / Environment variables      ### copy your variables from your .env file          ","categories": ["guide"],
        "tags": ["documentation","configuration","schema","principles","installation","deployment"],
        "url": "http://localhost:4000/guide/deployment-configs/",
        "teaser": null
      },{
        "title": "INSTALL THE DOCS WITH JEKYLL",
        "excerpt":"The documentation is produced with : Github pages Jekyll Minimal Mistakes template For a local deployment of the documentation project (Jekyll + MMistakes template) Install ruby, Jekyll brew install ruby gem install jekyll Install setup (given the Gemfile, Gemfile.lock and _config.yml files) gem install bundler bundle bundle install bundle update...","categories": ["guide"],
        "tags": ["documentation","configuration","installation","Jekyll"],
        "url": "http://localhost:4000/guide/install-docs/",
        "teaser": null
      },{
        "title": "STACK",
        "excerpt":"All libraries, packages and tools listed below are under open licence. Frontend Nuxt.js as JS framework upon Vue.js, Vue.js as JS framework, Axios for API queries (to make queries to Solidata or else), Vuetify as VUE-CSS framework, Mapbox-GL, and vue-mapbox as a mapbox-gl wrapper for vue.js Apex charts, and vue-apexcharts...","categories": ["dev"],
        "tags": ["tech","stack","credits"],
        "url": "http://localhost:4000/dev/stack/",
        "teaser": null
      },{
        "title": "CONTRIBUTING GUIDE",
        "excerpt":"Hello fellow developer/hacker/citizen/peer! inspired by : contributing guide of udata project Language The development language is English. All comments and documentation should be written in English, so that we don’t end up with “frenghish” methods, and so we can share our learnings with developers around the world. Code guides JavaScript...","categories": ["dev"],
        "tags": ["tech","stack","credits"],
        "url": "http://localhost:4000/dev/contributing/",
        "teaser": null
      },{
        "title": "GUIDELINES FOR DEVELOPMENT",
        "excerpt":"This project is prone to be developped by several developpers, so we agreed on some basic rules… GENERAL we try to comment and document in english check out our “project” boards board to have an idea about the priorities we collectively decided to work on “see something, say something” :...","categories": ["dev"],
        "tags": ["tech","roadmap","guidelines","stack"],
        "url": "http://localhost:4000/dev/guidelines/",
        "teaser": null
      },{
        "title": "MAINTAINCE",
        "excerpt":"  Maintainers :      Julien Paris (aka JulienParis on Github)   Geoffrey Aldebert (aka geoffreyaldebert on Github)   Project contacts :      Julien Paris (aka JulienParis on Github)   Alexandre Bulte (aka abulte on Github)   Geoffrey Aldebert (aka geoffreyaldebert on Github)   Romain Tales (aka romtal on Github)          ","categories": ["dev"],
        "tags": ["credits","maintainance"],
        "url": "http://localhost:4000/dev/maintain/",
        "teaser": null
      },{
        "title": "CREDITS",
        "excerpt":"  Services      Direction interministérielle du numérique or DINUM   Mission Etalab   Ministère de l’Economie, des Finances, de l’Action et des Comptes publics   Portail du Gouvernement     ODAMAP’s team :      Geoffrey Aldebert   Alexandre Bulté   Mathilde Hoang   Julien Paris   Romain Tales          ","categories": ["meta"],
        "tags": ["credits"],
        "url": "http://localhost:4000/meta/credits/",
        "teaser": null
      },{
        "title": "LICENSE",
        "excerpt":"MIT License Copyright (c) 2020 Etalab Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell...","categories": ["meta"],
        "tags": ["license"],
        "url": "http://localhost:4000/meta/license/",
        "teaser": null
      },{
        "title": "ROADMAPS",
        "excerpt":" Developers / roadmap   Check our project page on Github to have a glimpse of our roadmap.             Synthesis document   You can also check the wireframe document online or the wireframe document as pdf we are working on to have a more graphical approach on our roadmap.                   ","categories": ["dev"],
        "tags": ["tech","roadmap","stack"],
        "url": "http://localhost:4000/dev/roadmaps/",
        "teaser": null
      },{
        "title": "CHANGE LOG",
        "excerpt":"Version 2 v.2.1.0 : adding docs v.2.0.8 : no map scroll parameter in .env and/or url v.2.0.7 : fix bug of color and zoom when switching datasets with url params v.2.0.6 : store setup + zoom from url params v.2.0.5 : url parameters for store preload v.2.0.4 : custom color...","categories": ["general"],
        "tags": ["log","versions"],
        "url": "http://localhost:4000/general/changelog/",
        "teaser": null
      }]
