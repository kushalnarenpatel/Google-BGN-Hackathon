const CountryCodes = require('country-code-info');
const lookup = require('country-code-lookup');
var lookup2 = require('country-data').lookup;

//export default

function getCode1(country_name){
    let country = CountryCodes.findCountry({name:country_name});
    if(country == null){
        return ''
    }
    return country.a2.toLowerCase()
}

function getCode2(country_name){
    let country = lookup.byCountry(country_name)
    if(country == null){
        return ''
    }
    return country.iso2.toLowerCase()
}

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

function getCode3(country_name){
    country_name = titleCase(country_name)
    let country = lookup2.countries({name: country_name})[0];
    if(country == null){
        return ''
    }
    return country.alpha2.toLowerCase()
}

function getCount(arr,target){
    if (target == ''){
        return 0
    }
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target){
            count ++ 
        }
    }
    return count
}

export default function getCode(country_name){
    let max_code = ''
    let max_count = 0

    let codes = [getCode1(country_name),getCode2(country_name),getCode3(country_name)]
    for (let i = 0; i < codes.length; i ++ ){
        let count = getCount(codes,codes[i])
        if ( count > max_count){
            max_count = count
            max_code = codes[i]
        }
    }
    return max_code
}


