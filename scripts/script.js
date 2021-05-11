// * * * * SMOOTH SCROLLING ON SAME PAGE LINKS
const scroll = function () {
    $("a[href^=\\#]").click(function(e) {   
    e.preventDefault();   
    var dest = $(this).attr('href');   
    console.log(dest);   
    $('html,body').animate(
        { scrollTop: $(dest).offset().top }
        , 'slow'
    ); 
});
};

// * * * * works with id="smooth"

// * * * * RESPONSIVE MENU
// const navMenu = function () {
//     // * * * * MENU CLICK OUTSIDE
//     $(document).on("click", function(event){
//     if(!$(event.target).closest(".responsive-nav-button").length){
//         $(".responsive-nav").slideUp("fast");
//         }
//     });

//     $( ".responsive-nav-button" ).click(function() {
//         $( ".responsive-nav" ).toggle("slow");
//     });
// };

// * * * * LANDING PAGE BLOG POSTS
// const blogPostArray = [
//     {
//         title: "I'm title 1",
//         image: "./assets/pattern/PatternBone-Full.jpg",
//         imageAlt: "Pattern Print Blue Bones | Frizz Kid Art",
//         postContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis accusantium necessitatibus sed deleniti tempore accusamus saepe laboriosam dolorem, cum veritatis odio quae aperiam voluptatibus dicta eius? Cupiditate praesentium ab in.",
//         link: "blog-article.html"
//     },
//      {
//         title: "I'm title 2",
//         image: "./assets/pattern/PatternBone-Full.jpg",
//         imageAlt: "Pattern Print Blue Bones | Frizz Kid Art",
//         postContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis accusantium necessitatibus sed deleniti tempore accusamus saepe laboriosam dolorem, cum veritatis odio quae aperiam voluptatibus dicta eius? Cupiditate praesentium ab in.",
//         link: "blog-article.html"
//     }

// ]

// * * * * TRUNCATE
// const truncate = function(text,limit, after) {
//     let content = text.split(" ").slice(0, limit);
//     content = content.join(" ") + (after ? after : "");
//     return content;
// }

// * * * * PUT POSTS ON PAGE
// const displayBlogPost = () => {

//     const blogPost = blogPostArray.map((post) => {
//         const content = truncate(post.postContent, 20, "...")
//         return `<div class="blog-post-single">
//                 <img src="${post.image}" alt="${post.imageAlt}">
//                 <h3>${post.title}</h3>
//                 <p>${content}</p>
//                 <div class="button-box">
//                     <a href="${post.link}" class="frizz-button">Read More</a>
//                 </div>
//                 </div>
//         `
//     })
//     $(".blog-post-container").append(blogPost)
// }

// * * * * INIT PIECES
init = function () {
    // scroll();
    // navMenu();
};

// * * * * DOCUMENT READY
$(() => {
    init();
}); // * * * * END OF DOCUMENT READY
