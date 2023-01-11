import "./style.css";

const API_BASE_URL = "https://api.github.com/orgs/facebook/repos";
const PAGE_SIZE = 10
let PAGE = 1;

let canFetch = true;

const reposContainer = document.getElementById('repos-container');

reposContainer.addEventListener('scroll', handleScroll);

function createUrl(){
    const url = new URL(API_BASE_URL);
    url.searchParams.set("per_page", PAGE_SIZE);
    url.searchParams.set("page", PAGE);

    return url;
}

function handleScroll(){

}