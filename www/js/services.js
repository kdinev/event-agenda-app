angular.module('starter.services', [])

.factory('AgendaItems', function() {
  // Might use a resource here that returns a JSON array
  var personal = [];
  // Some fake testing data
  var agenda = [{
    id: 0,
    title: 'How to do what when and why',
    time: '9 AM',
    category: 'SOFT SKILLS',
	description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	speaker: {
		name: "Gerrard Buttler",
		id: 0
	}
  }, {
    id: 1,
    title: 'How not to do what the other guy before me told you to do.',
    time: '10 AM',
    category: 'SOFT SKILLS',
	description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	speaker: {
		name: "Bradley Pitts",
		id: 1
	}
  }, {
    id: 2,
    title: 'How not to do what the other guy before me told you to do.',
    time: '12 PM',
    category: 'FOOD & ENTERTAINMENT'
  }, {
    id: 3,
    title: 'How to do what when and why',
    time: '2 PM',
    category: 'SOFT SKILLS',
	description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	speaker: {
		name: "Gerrard Buttler",
		id: 0
	}
  }, {
    id: 4,
    title: 'How not to do what the other guy before me told you to do.',
    time: '5 PM',
    category: 'SOFT SKILLS',
	description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	speaker: {
		name: "Bradley Pitts",
		id: 1
	}
  }];

  return {
    all: function() {
      return agenda;
    },
    remove: function(item) {
      personal.splice(personal.indexOf(item), 1);
    },
	add: function (item) {
		personal.push(item);
	},
    get: function(itemId) {
      for (var i = 0; i < agenda.length; i++) {
        if (agenda[i].id === parseInt(itemId)) {
          return agenda[i];
        }
      }
      return null;
    },
	getUserSpecific: function () {
		if (!personal.length) {
			personal = agenda.slice(0, 2);
		}
		return personal;
	}
  };
})
.factory('Speakers', function() {
  // Some fake testing data
	var speakers = [{
		name: "Gerrard Buttler",
		id: 0,
		img: "/img/ben.png",
		company: "Company Inc.",
		position: "Position",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		sessions: [
			{
				id: 0,
				title: 'How to do what when and why',
				time: '9 AM'
			},
			{
				id: 3,
				title: 'How to do what when and why',
				time: '2 PM'
			}
		]
	}, {
		name: "Bradley Pitts",
		id: 1,
		img: "/img/max.png",
		company: "Company Inc.",
		position: "Position",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		sessions: [
			{
				id: 1,
				title: 'How not to do what the other guy before me told you to do.',
				time: '10 AM'
			},
			{
				id: 4,
				title: 'How not to do what the other guy before me told you to do.',
				time: '5 PM'
			}
		]
	}];

  return {
    all: function() {
      return speakers;
    },
    get: function(speakerId) {
      for (var i = 0; i < speakers.length; i++) {
        if (speakers[i].id === parseInt(speakerId)) {
          return speakers[i];
        }
      }
      return null;
    }
  };
});
