const settings = {
  difficulty: 'easy',
  minLevel: 10,
  didStart: false,
  plaers: ['John', 'JayT'],
};

type Settings = typeof settings;

function loadData(settings: Settings) {}

loadData(settings);
