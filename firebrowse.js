console.log('firebrowse.js loaded')

firebrowse={}

firebrowse.get=async function(url){
    return (await fetch(url)).json()
}

firebrowse.hello='hello at '+Date()

if(typeof(define)!='undefined'){
    define(firebrowse)
}

/*
url = 'http://firebrowse.org/api/v1/Samples/mRNASeq?format=json&gene=PSCA&cohort=BLCA&protocol=RSEM&page=1&page_size=250&sort_by=cohort'
x = firebrowse.get(url)
*/