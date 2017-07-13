
var ga_cds_cirque="true"; // Used to trigger the below tags
var ga_cds_data = {
    'ga_step': "step1-landing-page",
    'standard_uri': window.parent.location.href.substring(window.location.href.indexOf(".com")+4),
    'page_type': "Add to Cart",
    'breadcrumb': "Find tickets > artist page",
    'page_level_1': "Find tickets",
    'page_level_2': "artist page",
    'content_name': "artist page",
    'url_booking_engine': "ticketmaster",
    'url_show_name': "$Tag.artist_name$",
    'show_name': "$Tag.artist_name$",
    'booking_engine': "Ticketmaster",
    'page_env': "Booking Engine",
    'page_url': location.href
};
// Only fires on Cirque du Soleil Products
if (ga_cds_cirque !== false && ga_cds_cirque != 'false' && ga_cds_cirque) {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-15123064-8', 'auto', {'allowLinker': true, 'name':'cdsga'});
    ga('cdsga.require', 'ec');
    ga('cdsga.ec:addProduct', {
        'id': ga_cds_data.show_name,
        'name': ga_cds_data.show_name,
        'dimension4': ga_cds_data.booking_engine,
    });
    ga('cdsga.ec:setAction', 'add');
    ga('cdsga.set', 'page', "/"+ga_cds_data.url_booking_engine+"/"+ga_cds_data.url_show_name+"?ga_step="+ga_cds_data.ga_step);
    ga('cdsga.send', 'pageview', {
        'dimension32': ga_cds_data.page_env,
        'dimension10': ga_cds_data.page_url,
        'dimension84': ga_cds_data.standard_uri,
        'dimension46': ga_cds_data.page_type,
        'dimension6': ga_cds_data.breadcrumb,
        'dimension71': ga_cds_data.page_level_1,
        'dimension72': ga_cds_data.page_level_2,
        'dimension76': ga_cds_data.content_name,
        'dimension33': ga_cds_data.show_name,
        'dimension153': ga_cds_data.show_name
    });
    // Tag for Activity Group: CDS_CONV-ADDTOCART, Activity Name: DFA_CirqueduSoleil_RSD_Conversion-AddToCart, Activity ID: 3696100
    (function(e,t){var r=1e13*(Math.random()+""),n=document.createElement("iframe"),a=document.getElementsByTagName('script')[0];n.src=t+r+"?",n.width="1",n.frameBorder="0",n.height="1",a.parentNode.insertBefore(n,a)})('CDS_GA_TAG_2016072501', 'https://4348384.fls.doubleclick.net/activityi;src=4348384;type=cds_c0;cat=dfa_c0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;u3='+encodeURIComponent(ga_cds_data.show_name)+';ord=1;num=');
}
