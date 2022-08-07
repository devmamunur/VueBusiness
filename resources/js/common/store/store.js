import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {setting} from './moduls/setting'
import {admin} from './moduls/admin'
import {blogCategory} from './moduls/blogCategory'
import {blog} from './moduls/blog'
import {jobCategory} from './moduls/jobCategory'
import {job} from './moduls/job'
import {service} from './moduls/service'
import {portfolio} from './moduls/portfolio'
import {galleryCategory} from './moduls/galleryCategory'
import {gallery} from './moduls/gallery'
import {pricingPlan} from './moduls/package'
import {history} from './moduls/history'
import {slider} from './moduls/slider'
import {sectiontitle} from './moduls/sectiontitle'
import {feature} from './moduls/feature'
import {whayChoose} from './moduls/whayChoose'
import {testimonial} from './moduls/testimonial'
import {team} from './moduls/team'
import {faq} from './moduls/faq'
import {counter} from './moduls/counter'
import {client} from './moduls/client'
import {footerlink} from './moduls/footerlink'
import {index} from './moduls/app/index'
import {visibility} from './moduls/visibility'
import {socialLink} from './moduls/socialLink'
import {application} from './moduls/application'
import {subscriber} from './moduls/subscriber'
import {mailConfiguration} from './moduls/mailConfiguration'
import {quote} from './moduls/quote'
import {language} from './moduls/language'
import {dashboard} from './moduls/dashboard'

export const store = new Vuex.Store({
    modules: {
        setting : setting,
        admin : admin,
        blogCategory : blogCategory,
        blog : blog,
        jobCategory : jobCategory,
        job : job,
        service : service,
        portfolio : portfolio,
        galleryCategory : galleryCategory,
        gallery : gallery,
        pricingPlan : pricingPlan,
        history : history,
        slider : slider,
        sectiontitle : sectiontitle,
        feature : feature,
        whayChoose : whayChoose,
        testimonial : testimonial,
        team : team,
        faq : faq,
        counter : counter,
        client : client,
        footerlink : footerlink,
        index : index,
        visibility : visibility,
        socialLink : socialLink,
        application : application,
        subscriber : subscriber,
        mailConfiguration : mailConfiguration,
        quote : quote,
        language : language,
        dashboard : dashboard,
    }
})

