angular.module('vinayakApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<div class=\"bg-black about-page\"> <div class=\"w3-content w3-container w3-padding-64\" id=\"about\"> <h1 class=\"w3-center\">ABOUT VINAYAKA</h1> <hr> <p>Vinayaka Moorthi M K was born on 12 April, 1992 in Alappuzha a very beautiful region in the state of Kerala, India. He is the first son to Mrs. Beas and Mr. Krishnamoorthy. Vinayaka was raised in the village of Pallatthuruth North on the banks of River Pampa and Vembanaadu Lake. His early childhood and schooling was in Alappuzha. Vinayak believes it is his childhood experiences in this beautiful village that planted seedling of writing in his mind. After finishing his lower school education, he moved to Cherthala with his family, there he continued his education till graduation. He moved to Coventry, UK to join in Coventry University where he finished his Post Graduation in English Language Teaching in the year 2013. His first book was published in the year 2013 in the UK titled ‘I Met a Fairy Queen’. He worked in the Republic of Maldives and in India as English lecturer for a couple of years. He took Master degrees in English Literature and then in English Language and Linguistics from India. Apart from writing and teaching he is interested in reading and learning linguistics.</p> <div class=\"w3-row\"> <div class=\"w3-col m6 w3-center w3-padding-large\"> <p><b><i class=\"fa fa-user w3-margin-right\"></i>Vinayaka Moorthi</b></p><br> <img src=\"/images/vina.jpeg\" class=\"w3-round w3-image w3-opacity w3-hover-opacity-off\" id=\"about-img\" alt=\"Photo of Me\" width=\"600\" height=\"300\"> </div> <!-- Hide this text on small devices --> <div class=\"w3-col m6 w3-hide-small w3-padding-large\"> <p class=\"w3-center\"><em>I love writing. Why?</em></p> <hr> <p style=\"padding-top: 2px\">It is a pleasure hoping someone somewhere likes what I write. No matter how hard it is to step into the world of letters I long to tell my stories. How did I get that initial spark to this evergreen art? Was it the story of Sindbad of Arabia or was it Vikramaadithya and Vethala or was it someone from a Dickens story? Or is it my own life somehow wanting to be exposed? Whatever the reasons be, I wanted to be a writer! And here I am trying to say what I have for you. If my characters Walk in your dreams, behold them. If they haunt your nights then forgive them. If they cause tears, console them. I give them all to you...Let them in, for they need to be heard.</p> </div> </div> </div></div>"
  );


  $templateCache.put('views/blogs.html',
    "<div style=\"background-color: white\" class=\"blogs-page\"> <div class=\"container\"> <div ng-app=\"vinayakApp\"> <br> <br> <br> <h1 class=\"font-bl\">My Personal Blogs: </h1> <!-- Blog entries --> <hr> <div class=\"w3-col l8 s12\"> <!-- Blog entry --> <div class=\"w3-card-4 w3-margin\"> <div class=\"w3-container\"> <h3 class=\"font-bl\"><b>A Dream of Eight Long Years</b></h3> </div> <hr> <div class=\"w3-container\"> <p>Off the ground, off the truth in a dream I was, <br> Of the dream of eight long years a song I’ve tuned, <br> Of the tune that I still hum on the sweets she fed,</p> <div class=\"w3-row\"> <div class=\"w3-col m8 s12\"> <p><a href=\"https://medium.com/@vinayakamoorthi/a-dream-of-eight-long-years-77f72a0b4737\" target=\"_blank\" class=\"w3-button w3-padding-large w3-teal w3-border\"><b>READ MORE »</b></a></p> </div> </div> </div> </div> <hr> <!-- Blog entry --> <div class=\"w3-card-4 w3-margin\"> <div class=\"w3-container\"> <h3 class=\"font-bl\"><b>Way it is to wake again</b></h3> </div> <hr> <div class=\"w3-container\"> <p>Man’s hand is of magnificence, one that makes <br> Towers kissing skies, sails that cross the blue <br> Carving lines on sands that cut distance so short</p> <div class=\"w3-row\"> <div class=\"w3-col m8 s12\"> <p><a href=\"https://medium.com/@vinayakamoorthi/way-it-is-to-wake-again-da94b0220d5\" target=\"_blank\" class=\"w3-button w3-padding-large w3-teal w3-border\"><b>READ MORE »</b></a></p> </div> </div> </div> </div> <hr> <!-- Blog entry --> <div class=\"w3-card-4 w3-margin\"> <div class=\"w3-container\"> <h3 class=\"font-bl\"><b>Of Alenope and A Sinful Deed</b></h3> </div> <hr> <div class=\"w3-container\"> <p>You know her attire, her long curly hair and smile, <br> You saw her in her great blue cloths, and her ring <br> That once was mine with an emerald star carved</p> <div class=\"w3-row\"> <div class=\"w3-col m8 s12\"> <p><a href=\"https://medium.com/@vinayakamoorthi/of-alenope-and-a-sinful-deed-86b3aaae77fd\" target=\"_blank\" class=\"w3-button w3-padding-large w3-teal w3-border\"><b>READ MORE »</b></a></p> </div> </div> </div> </div> <hr> <!-- Blog entry --> <div class=\"w3-card-4 w3-margin\"> <div class=\"w3-container\"> <h3 class=\"font-bl\"><b>Apology</b></h3> </div> <hr> <div class=\"w3-container\"> <p>Thou secret hands of nature, Omni present light <br> Remembrance of thou is done here <br> Though thou forget to show us the paths</p> <div class=\"w3-row\"> <div class=\"w3-col m8 s12\"> <p><a href=\"https://medium.com/@vinayakamoorthi/apology-65c0dbd59042\" target=\"_blank\" class=\"w3-button w3-padding-large w3-teal w3-border\"><b>READ MORE »</b></a></p> </div> </div> </div> </div> <hr> <!-- Blog entry --> <div class=\"w3-card-4 w3-margin\"> <div class=\"w3-container\"> <h3 class=\"font-bl\"><b>Child of three I call thee ‘Love’</b></h3> </div> <hr> <div class=\"w3-container\"> <p>Know very much of the man who sings beneath the shade <br> And knows much of a damsel to whom this song is meant <br> Have seen them both before they part, embracing</p> <div class=\"w3-row\"> <div class=\"w3-col m8 s12\"> <p><a href=\"https://medium.com/@vinayakamoorthi/child-of-three-i-call-thee-love-5905e4427d0d\" target=\"_blank\" class=\"w3-button w3-padding-large w3-teal w3-border\"><b>READ MORE »</b></a></p> </div> </div> </div> </div> <hr> <!-- Blog entry --> <div class=\"w3-card-4 w3-margin\"> <div class=\"w3-container\"> <h3 class=\"font-bl\"><b>Seed of life I promise thee</b></h3> </div> <hr> <div class=\"w3-container\"> <p>Oh, Man of song, you still laments on thy loss <br> And palely you sing for long, so long. <br> Keeping a question in my heart of words for you</p> <div class=\"w3-row\"> <div class=\"w3-col m8 s12\"> <p><a href=\"https://medium.com/@vinayakamoorthi/seed-of-life-i-promise-thee-45d42490c09b\" target=\"_blank\" class=\"w3-button w3-padding-large w3-teal w3-border\"><b>READ MORE »</b></a></p> </div> </div> </div> </div> <hr> <!-- Blog entry --> <div class=\"w3-card-4 w3-margin\"> <div class=\"w3-container\"> <h3 class=\"font-bl\"><b>Museum keeper</b></h3> </div> <hr> <div class=\"w3-container\"> <p>They say he is ought to keep them safe, <br> The old memories, but not too old souvenirs <br> Of his own voyage and rides, as I know</p> <div class=\"w3-row\"> <div class=\"w3-col m8 s12\"> <p><a href=\"https://medium.com/@vinayakamoorthi/museum-keeper-3fcfedd497b8\" target=\"_blank\" class=\"w3-button w3-padding-large w3-teal w3-border\"><b>READ MORE »</b></a></p> </div> </div> </div> </div> <hr> <!-- Blog entry --> <div class=\"w3-card-4 w3-margin\"> <div class=\"w3-container\"> <h3 class=\"font-bl\"><b>We of song shall sing along</b></h3> </div> <hr> <div class=\"w3-container\"> <p>Whom should I complain of thy loss, or <br> Where can I find a tinge of love you may like? <br> Where have you lost thy lyre of tune?</p> <div class=\"w3-row\"> <div class=\"w3-col m8 s12\"> <p><a href=\"https://medium.com/@vinayakamoorthi/we-of-song-shall-sing-along-3b897b4b2ece\" target=\"_blank\" class=\"w3-button w3-padding-large w3-teal w3-border\"><b>READ MORE »</b></a></p> </div> </div> </div> </div> <hr> <!-- Blog entry --> <div class=\"w3-card-4 w3-margin\"> <div class=\"w3-container\"> <h3 class=\"font-bl\"><b>To My Talking Poetry</b></h3> </div> <hr> <div class=\"w3-container\"> <p>Oh, you call me ‘Man of song’ happy I am of that name <br> You my song, my one true companion, you’ve grown so wise <br> You now know to speak of love ; You now know much of life</p> <div class=\"w3-row\"> <div class=\"w3-col m8 s12\"> <p><a href=\"https://medium.com/@vinayakamoorthi/to-my-talking-poetry-1d75bd1ec4c2\" target=\"_blank\" class=\"w3-button w3-padding-large w3-teal w3-border\"><b>READ MORE »</b></a></p> </div> </div> </div> </div> <!-- END BLOG ENTRIES --> </div> </div> </div> </div>"
  );


  $templateCache.put('views/books.html',
    "<div class=\"bg-black\"> <br> <hr> <div class=\"container\"> <div class=\"row white-bg book-bg\"> <div class=\"col-md-12\"> <div class=\"row\"> <div class=\"col-md-5\"> <div class=\"product-images\"> <div> <img class=\"pdt-images\" src=\"images/TimeTraveller.jpg\" alt=\"Time Traveller\"> </div> </div> </div> <div class=\"col-md-7\"> <h2 class=\"font-bold m-b-xs\"> The Time Traveller </h2> <small>“Find a lonely tree in the middle of a cornfield and sit beneath its trembling leaves in the solitude of an evening. And ask yourself, do they really exist? Do we really exist”?</small> <hr> <h4>Book description</h4> <div class=\"small text-muted\"> Imagine yourself to be lost in time, well that would sound unfamiliar for some at least. Because we all have different perceptions about time. Time seems moving and unstoppable vehemently to our naked senses. At least for once we all get this desire to stop it, to change what happened in our lives. <br> <br> Imagine one fine morning you wake up from your sound sleep to find yourself somewhere else. You wake up in a distant land of which you have no memories at all. You look upon those lands and its people and it is strange indeed to you. It is later, you realise you are not even in your body. What you considered as your own body is no more a reality. You realise you are in a different time way back in the past in very different livelihood. None of us are sure about rebirths and the possibilities of previous lives. <br> <br> In this story you would find a young English man in a similar situation. He is stuck in his own previous life at a crucial point in that lifetime, trying to achieve something which he perhaps couldn’t when he lived it once. What happens to him in his past? How he travels back into his time? Answers to these questions are buried in the pages of the book. <br> <br> “History is like an empty shell that became pale white in the course of time, having lost with each molecule of moisture in the summer sands. What we know about the past are skeletons of some lives, reality is often forgotten; the flesh and blood”. <br> <br> This book takes you in a short voyage and would leave you with a question, ‘What really exists’? <br> </div> <hr> <div> <div> <a href=\"https://www.amazon.in/Time-Traveller-Vinayaka-Moorthi/dp/9386487039/ref=sr_1_1?ie=UTF8&qid=1505316708&sr=8-1&keywords=time+traveller\" class=\"btn btn-primary w3-button w3-orange font-type\"><i class=\"fa fa-cart-plus\"></i> Buy from Amazon</a> <a class=\"btn btn-white w3-button w3-green font-type\" target=\"_blank\"><i class=\"fa fa-star\"></i> Review at Gooreads </a> </div> </div> </div> </div> </div> </div> <hr> <div class=\"row white-bg book-bg\"> <div class=\"col-md-12\"> <div class=\"row\"> <div class=\"col-md-7\"> <h2 class=\"font-bold m-b-xs\"> I MET A Fairy Queen </h2> <small>“I felt her hands holding tight on her umbrella touching my fingers. The rhythm of the rain hid us from everyone and melted the love of two human beings, dripped one by one through our umbrellas and floated with the rainwater”</small> <hr> <h4>Book description</h4> <div class=\"small text-muted\"> Who is not interested in finding whether God really exists? Who lived a life without thinking at least once about the truth of heaven, heavenly beings or afterlife? I would say, none. This book peeps into the imaginary dwellings of Angels hidden among the clouds we see. Hidden from the day of our loss of Paradise. It takes us to a beautiful world of two children and their adventures, their innocence, their love for each other and their love for nature. <br> <br> I Met a Fairy Queen is my first attempt to the regime of fantasy and children’s literature. The book introduces to you a beautiful rural imaginary village and its people. The story begins with Jim and Annie, two thick friends and their little world of happiness and childish agonies. In a fine evening when Annie left Jim alone to play by the banks of their brook he happens to see an Angel from heavens. Their first reluctance slowly builds up a close friendship. Conventions and many so called laws soon breaks apart and to Jim and Annie the heavenly beings open their world. It is in one way a process of regaining paradise. The sacrifices of Jim and Annie would please our minds as their journey takes us together to some new lands. <br> <br> “I felt her hands holding tight on her umbrella touching my fingers. The rhythm of the rain hid us from everyone and melted the love of two human beings, dripped one by one through our umbrellas and floated with the rainwater”. <br> <br> Through Jim and Annie, we learn how to be happy, how to love each other and find peace. A children’s book that would melt even the hearts of adults. ‘The truth is this, there is always a room for our own childhood, deep in the strongest corners of our minds’. <br> </div> <hr> <div> <div> <a href=\"https://www.amazon.in/Met-Fairy-Queen-Vinayaka-Moorthi/dp/178148337X/ref=sr_1_1?ie=UTF8&qid=1505316774&sr=8-1&keywords=i+met+a+fairy+queen\" class=\"btn btn-primary w3-button w3-orange font-type\"><i class=\"fa fa-cart-plus\"></i> Buy from Amazon</a> <a href=\"https://www.goodreads.com/book/show/30513986-i-met-a-fairy-queen?ac=1&from_search=true\" target=\"_blank\" class=\"btn btn-white w3-button w3-green font-type\"><i class=\"fa fa-star\"></i> Review at Gooreads </a> </div> </div> </div> <div class=\"col-md-5\"> <div class=\"product-images\"> <div> <img class=\"pdt-images\" src=\"images/i_met.jpg\" alt=\"I Met a Fairy queen\"> </div> </div> </div> </div> </div> </div>  </div> </div>"
  );


  $templateCache.put('views/contact.html',
    "<div ng-app=\"vinayakApp\" ng-controller=\"ContactCtrl\"> <div class=\"container contact-page animated fadeInDown\"> <h1 id=\"header\">Get In Touch</h1> <div class=\"row\"> <div class=\"col-md-6 contact-customloginColumns-form\"> <div class=\"form-style\"> <div> <h1 class=\"contact-font-header\">Send me a message</h1> </div> <hr> <div class=\"box-content\"> <form name=\"form\" method=\"post\" ng-submit=\"submit()\"> <div class=\"form-row\"> <div class=\"form-group col-md-6\"> <label for=\"name\" class=\"col-form-label\">Name</label> <input type=\"text\" placeholder=\"John Doe\" class=\"form-control box-line\" id=\"name\" name=\"name\" ng-required=\"user.name.required\" ng-model=\"name\" ng-minlength=\"{{user.name.minlength}}\" ng-maxlength=\"{{user.name.maxlength}}\"> <span class=\"error-highlighter\" ng-show=\"form.name.$dirty && form.name.$error.required\">Name is required!</span> <div> <span class=\"error-highlighter\" ng-show=\"form.name.$error.minlength\">Name has to be at least 5 characters</span> </div> <div> <span class=\"error-highlighter\" ng-show=\"form.name.$error.maxlength\">Name cannot exceed 25 characters</span> </div> </div> <div class=\"form-group col-md-6\"> <label for=\"email\" class=\"col-form-label\">Email</label> <input type=\"email\" placeholder=\"johndoe@email.com\" name=\"email\" ng-required=\"user.email.required\" ng-model=\"email\" class=\"form-control box-line\" id=\"email\"> <span class=\"error-highlighter\" ng-show=\"form.email.$dirty && form.email.$error.required\">Please enter your email Id!</span> </div> <div class=\"form-group col-md-12\"> <label for=\"message\" class=\"col-form-label\">Message</label> <textarea rows=\"2\" cols=\"3\" name=\"message\" id=\"message\" ng-required=\"user.message.required\" ng-model=\"message\" ng-minlength=\"{{user.message.minlength}}\" ng-maxlength=\"{{user.message.maxlength}}\" placeholder=\"Hi, I love your book because!!!\" class=\"form-control box-line\"></textarea> <span class=\"error-highlighter\" ng-show=\"form.message.$dirty && form.message.$error.required\">Please enter some message!</span> <div> <span class=\"error-highlighter\" ng-show=\"form.message.$error.minlength\">Message cannot be less than 10 characters</span> </div> <div> <span class=\"error-highlighter\" ng-show=\"form.message.$error.maxlength\">Message has to under 300 characters</span> </div> </div> <div class=\"form-group row\"> <div class=\"sbt-btn col-md-9 col-md-offset-7\"> <button class=\"btn btn-primary btn-sm\" value=\"submit\" type=\"submit\">Submit</button> </div> </div> </div> </form> </div> </div> </div> <div class=\"col-md-6 contact-info contact-customloginColumns-info\"> <div class=\"info-style\"> <div> <h1 class=\"contact-font-header\" style=\"color:aliceblue\">Contact me</h1> </div> <hr> <div> <p><i class=\"fa fa-envelope fa-lg\"></i>&nbsp moorthivinayak@gmail.com</p> </div> <div> <p><i class=\"fa fa-phone-square fa-lg\"></i>&nbsp +91 8281273697</p> </div> <div> <a href=\"https://www.facebook.com/vinayaka.moorthi.18\" target=\"_blank\" style=\"font-size:48px;color:#4267b2\" class=\"fa fa-facebook fa-lg\">&nbsp&nbsp</a> <a href=\"https://twitter.com/vinayakmk1\" target=\"_blank\" style=\"font-size:48px;color:#1DA1F2\" class=\"fa fa-twitter fa-lg\"></a> </div> </div> </div> </div> </div> </div> "
  );


  $templateCache.put('views/main.html',
    "<div div ng-app=\"vinayakApp\" ng-controller=\"MainCtrl\"> <div class=\"container main-page\"> <h1 class=\"main-head\">Hi, I'm Vinayaka</h1> <h2 class=\"main-text\">Craft your reading journey with my books.</h2> </div> </div>"
  );


  $templateCache.put('views/recommendation.html',
    "<div class=\"bg-black\"> <div class=\"container\"> <div class=\"row\"> <br> <br> <br> <h1 class=\"recomend-text font-c\">Books that I absolutely adore: </h1> <hr> <div class=\"col-md-12\"> <div class=\"ibox\"> <div class=\"ibox-content product-box\"> <div class=\"row\"> <div class=\"col-md-4\"> <a href=\"https://www.goodreads.com/book/show/77203.The_Kite_Runner?ac=1&from_search=true\"></a><img src=\"images/kiterunner.jpg\" alt=\"Kite Runner Book\" height=\"80%\" width=\"80%\"> </div> <div class=\"col-md-8\" style=\"padding-left:0px\"> <br> <h2 class=\"recomend-text\">The Kite Runner</h2> <hr> <h3 class=\"recomend-text\">Author:</h3> <h3 class=\"recomend-text\">Khaled Hosseini</h3> <br> <h4 class=\"recomend-text\">About book:</h4> <h4 class=\"recomend-text\">We see a different Afghan from the narration of Khaled Hosseini. The changes Afghan had gone through from the Soviets and from the emergence of Taliban. This first book from Hosseini became a best seller and an internationally recognized, the beauty of the book lies in the narration of human relations. </h4> <br> <a href=\"https://www.goodreads.com/book/show/77203.The_Kite_Runner?ac=1&from_search=true\" target=\"_blank\" class=\"btn w3-button w3-green font-type font-type\"> More on Gooreads </a> </div> </div> </div> </div> </div> <div class=\"col-md-12\"> <div class=\"ibox\"> <div class=\"ibox-content product-box\"> <div class=\"row\"> <div class=\"col-md-4\"> <a href=\"https://www.goodreads.com/book/show/865.The_Alchemist?from_search=true\"></a><img src=\"images/alchemist.jpg\" alt=\"The Alchemist Book\" height=\"80%\" width=\"80%\"> </div> <div class=\"col-md-8\" style=\"padding-left:0px\"> <br> <h2 class=\"recomend-text\">The Alchemist</h2> <hr> <h3 class=\"recomend-text\">Author:</h3> <h3 class=\"recomend-text\">Paulo Coelho</h3> <br> <h4 class=\"recomend-text\">About book:</h4> <h4 class=\"recomend-text\">Alchemist lies within you. The magician who makes gold from nowhere, and as we read on this book we do meet an Alchemist who helps us to find ourselves from the darkest corners of our minds. We will meet our own dreams in the pages of ‘The Alchemist’.</h4> <br> <a href=\"https://www.goodreads.com/book/show/865.The_Alchemist?from_search=true\" target=\"_blank\" class=\"btn w3-button w3-green font-type font-type\"> More on Gooreads </a> </div> </div> </div> </div> </div> <div class=\"col-md-12\"> <div class=\"ibox\"> <div class=\"ibox-content product-box\"> <div class=\"row\"> <div class=\"col-md-4\"> <a href=\"https://www.goodreads.com/book/show/2956.The_Adventures_of_Huckleberry_Finn?from_search=true\"></a><img src=\"images/theadventuresofhuckleberryfinn.jpg\" alt=\"The Adventures of Huckleberry Finn Book\" height=\"80%\" width=\"80%\"> </div> <div class=\"col-md-8\" style=\"padding-left:0px\"> <br> <h2 class=\"recomend-text\">The Adventures of Huckleberry Finn</h2> <hr> <h3 class=\"recomend-text\">Author:</h3> <h3 class=\"recomend-text\">Mark Twain</h3> <br> <h4 class=\"recomend-text\">About book:</h4> <h4 class=\"recomend-text\">You fall in love with two naughty boys if you read this book. The painful reality of life is blown away with the immature adventures of Tom and Huckleberry. They are both the child in every readers’ mind, we read and fulfils the childhood adventures of ourselves. Take yourself back to the childhood happiness.</h4> <br> <a href=\"https://www.goodreads.com/book/show/2956.The_Adventures_of_Huckleberry_Finn?from_search=true\" target=\"_blank\" class=\"btn w3-button w3-green font-type font-type\"> More on Gooreads </a> </div> </div> </div> </div> </div> <div class=\"col-md-12\"> <div class=\"ibox\"> <div class=\"ibox-content product-box\"> <div class=\"row\"> <div class=\"col-md-4\"> <a href=\"https://www.goodreads.com/book/show/3836.Don_Quixote?ac=1&from_search=true\"></a><img src=\"images/don.jpg\" alt=\"Don Quixote Book\" height=\"80%\" width=\"80%\"> </div> <div class=\"col-md-8\" style=\"padding-left:0px\"> <br> <h2 class=\"recomend-text\">Don Quixote</h2> <hr> <h3 class=\"recomend-text\">Author:</h3> <h3 class=\"recomend-text\">Miguel de Cervantes</h3> <br> <h4 class=\"recomend-text\">About book:</h4> <h4 class=\"recomend-text\">Satire at its best, Don Quixote is a perfect example. It doesn’t matter how many years pass by after this satire, there will be Don Quixote like characters in real life at any corner of the world. We laugh, we enjoy, we think and re-think between the lines.</h4> <br> <a href=\"https://www.goodreads.com/book/show/3836.Don_Quixote?ac=1&from_search=true\" target=\"_blank\" class=\"btn w3-button w3-green font-type font-type\"> More on Gooreads </a> </div> </div> </div> </div> </div> <div class=\"col-md-12\"> <div class=\"ibox\"> <div class=\"ibox-content product-box\"> <div class=\"row\"> <div class=\"col-md-4\"> <a href=\"https://www.goodreads.com/book/show/6185.Wuthering_Heights?from_search=true\"></a><img src=\"images/wuthering.jpg\" alt=\"Wuthering Heights Book\" height=\"80%\" width=\"80%\"> </div> <div class=\"col-md-8\" style=\"padding-left:0px\"> <br> <h2 class=\"recomend-text\">Wuthering Heights</h2> <hr> <h3 class=\"recomend-text\">Author:</h3> <h3 class=\"recomend-text\">Emily Bronte</h3> <br> <h4 class=\"recomend-text\">About book:</h4> <h4 class=\"recomend-text\">One of the best female writings. The descriptions and the story brings up old country English livelihood and its genuine elements. Characters in the book would haunt the reader and deeply imprint their marks in the hearts.</h4> <br> <br> <a href=\"https://www.goodreads.com/book/show/6185.Wuthering_Heights?from_search=true\" target=\"_blank\" class=\"btn w3-button w3-green font-type font-type\"> More on Gooreads </a> </div> </div> </div> </div> </div> <div class=\"col-md-12\"> <div class=\"ibox\"> <div class=\"ibox-content product-box\"> <div class=\"row\"> <div class=\"col-md-4\"> <a href=\"https://www.goodreads.com/book/show/18245000-oru-sankeerthanam-pole?ac=1&from_search=true\"></a><img src=\"images/malyali.jpg\" alt=\"Oru Sankeerthanam Pole Book\" height=\"80%\" width=\"80%\"> </div> <div class=\"col-md-8\" style=\"padding-left:0px\"> <br> <h2 class=\"recomend-text\">Oru Sankeerthanam Pole</h2> <hr> <h3 class=\"recomend-text\">Author:</h3> <h3 class=\"recomend-text\">Permubadavom Sreedharan</h3> <br> <h4 class=\"recomend-text\">About book:</h4> <h4 class=\"recomend-text\">A beautiful biographical story about Fyodor Dostoyevski. The great writer’s different life, his different behavior, his weaknesses and his beautiful relation with Anna. A truly magical work written in Malayalam about the greatest storyteller of all time.</h4> <br> <a href=\"https://www.goodreads.com/book/show/18245000-oru-sankeerthanam-pole?ac=1&from_search=true\" target=\"_blank\" class=\"btn w3-button w3-green font-type font-type\"> More on Gooreads </a> </div> </div> </div> </div> </div> </div> </div></div>"
  );

}]);
