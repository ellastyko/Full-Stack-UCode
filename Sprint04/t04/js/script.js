let obj = {
  inception: {
    name: 'Inception',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81KG6gAqPoL._AC_SL1500_.jpg',
    relise: 'April 20 2010',
    cast: ['Leonardo Dicaprio', 'Tom Hardy', 'Marion Cotillard', 'Joseph Gordon-Levitt'],
    about: "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, \
      who also produced the film with his wife, Emma Thomas. The film stars Leonardo DiCaprio as a professional thief \
      who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his \
      criminal history erased as payment for the implantation of another persons idea into a targets subconscious. \
      The ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt, Marion    Cotillard, Elliot Page, \
      Tom Hardy, Dileep Rao, Cillian Murphy, Tom Berenger, and Michael Caine.\
      After the 2002 completion of Insomnia, Nolan presented to Warner Bros. a written 80-page treatment for a horror \
      film envisioning dream stealers, based on lucid dreaming. Deciding he needed more experience before tackling \
      a production of this magnitude and complexity, Nolan shelved the project and instead worked on 2005s Batman Begins, 2006's \
      The Prestige, and The Dark Knight in 2008. The treatment was revised over 6 months and was purchased by Warner \
      in February 2009. Inception was filmed in six countries, beginning in Tokyo on June 19 and ending in Canada on \
      November 22. Its official budget was $160 million, split between Warner Bros. and Legendary. Nolan's \
      reputation and success with The Dark Knight helped secure the film's US$100 million in advertising expenditure."
  },
  helsing: {
    name: 'Van Helsing',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71DHEagosIL._AC_SY879_.jpg',
    relise: 'May 7 2004',
    cast: ['Hugh Jackman', 'Kate Backinsale', 'Richard Roxbourg'],
    about: "Van Helsing is a 2004 American action gothic horror film written and directed by Stephen Sommers. \
            It stars Hugh Jackman as monster hunter Van Helsing, and Kate Beckinsale as Anna Valerious. \
            The film is a homage and tribute to the Universal Horror Monster films from the 1930s and 1940s \
            (also produced by Universal Studios which were in turn based on novels by Bram Stoker and Mary Shelley), \
            of which Sommers is a fan. \
            The eponymous character was inspired by the Dutch vampire hunter Abraham Van Helsing from Irish \
            author Bram Stoker's novel Dracula. Distributed by Universal Pictures, the film includes a number of \
            monsters such as Count Dracula (and other vampires), Frankenstein's monster, Duergar, Mr. Hyde and werewolves \
            in a way similar to the multi-monster movies that Universal produced in the 1940s, such as Frankenstein \
            Meets the Wolf Man, House of Frankenstein and House of Dracula."
  },
  interstellar: {
    name: 'Interstellar',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81kz06oSUeL._AC_SL1500_.jpg',
    relise: 'April 20 2014',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Michael Caine'],
    about: "Interstellar is a 2014 epic science fiction film directed and produced by Christopher Nolan. \
      It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, John Lithgow, \
      Michael Caine, and Matt Damon. Set in a dystopian future where humanity is struggling to survive, the film \
      follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for mankind. \
      Brothers Christopher and Jonathan Nolan wrote the screenplay, which had its origins in a script Jonathan developed \
      in 2007. Christopher produced Interstellar with his wife, Emma Thomas, through their production company Syncopy, \
      and with Lynda Obst through Lynda Obst Productions. Caltech theoretical physicist and 2017 Nobel laureate in Physics \
      Kip Thorne was an executive producer, acted as scientific consultant, and wrote a tie-in book, The Science \
      of Interstellar. Paramount Pictures, Warner Bros. Pictures, and Legendary Pictures co-financed the film. \
      Cinematographer Hoyte van Hoytema shot it on 35 mm in the Panavision anamorphic format and IMAX 70 mm. Principal \
      photography began in late 2013 and took place in Alberta (Canada), Iceland and Los Angeles. Interstellar uses \
      extensive practical and miniature effects and the company Double Negative created additional digital effects."
  }
}



window.onload = (event) => {

    let films = document.getElementById('nav-bar').children;
    let name = document.getElementById('film-name');
    let relise = document.getElementById('relise');
    let cast = document.getElementById('cast');
    let about = document.getElementById('about');
    let image = document.getElementById('poster-image');
    for (let i = 0; i < 3; i++) {
      films[i].addEventListener('focus', changeFilm);
    }


    function changeFilm(event) {

        // Очистка от блоков актеров
        console.log('focus')
        while (cast.firstChild) {
          cast.removeChild(cast.lastChild);
        }
        // Если фильм найден то ...
        if (obj[this.dataset.film] != undefined) {
          let movie = obj[this.dataset.film];
          name.innerHTML = movie.name;
          relise.innerHTML = movie.relise;
          for (let i of movie.cast) {
            let actor = document.createElement('div');
            actor.appendChild(document.createTextNode(i))
            actor.className = 'actor';
            cast.appendChild(actor);
          }
          image.src = movie.img;
          about.innerHTML = movie.about;
        }
    }
}
