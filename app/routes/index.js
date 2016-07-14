import Ember from 'ember';


var projects = [{
  id: 1,
  title: "Designer Toy Awards Website",
  image: "https://pixabay.com/en/cat-pet-animal-white-cute-kitten-938667/",
  skillsUsed: "Sass, CSS, HTML, JavaScript, Ember, Sketch",
  description: "I made this application as a redesign of the current website for the Annual Designer Toy Award Ceremony."
}, {
  id: 2,
  title: "Digital Illustration",
  image: "https://pixabay.com/en/cat-pet-animal-white-cute-kitten-938667/",
  skillsUsed: "Sass, CSS, HTML, JavaScript, Ember, Sketch",
  description: "I made this application as a redesign of the current webiste for the Annual Designer Toy Award Ceremony."
}, {
  id: 3,
  title: "Something Equally as Cool",
  image: "https://pixabay.com/en/cat-pet-animal-white-cute-kitten-938667/",
  skillsUsed: "Sass, CSS, HTML, JavaScript, Ember, Sketch",
  description: "I made this application as a redesign of the current webiste for the Annual Designer Toy Award Ceremony."
}];

export default Ember.Route.extend({
  model() {
    return projects;
  },
});
