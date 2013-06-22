var wsc = wsc || {};

wsc.peeps = [
"Disha A",
"Amanda A",
"India A",
"Valery A",
"Sarah B",
"Peggy B",
"Alianor C",
"Emily C",
"Meibell C",
"Amanda C",
"Claudia D",
"Kate E",
"Rachel E",
"Leah H",
"Cheri H",
"Kim M",
"Olga O",
"Linda P",
"M Reilly",
"Aimee S",
"Catt S",
"Susan T",
"Ivete T",
"Donna T",
"Allison U",
"Jia Y",
"Marina Z",
"Lerna E",
"Ashley M",
"Ananta P",
"Rebecca M",
"Vanessa H",
"Celia L",
"Rachel O",
"Chrys W",
"Camille A",
"Corey L",
"Pam S",
"Frederica S",
"Alexis G",
"Alli R",
"Theresa F",
"Kelley R",
"Lynda W",
"Fureigh",
"Serena W"
];

wsc.raffle = {
  _orig_list: [],
  _curr_list: [],
  _display_orig: "",
  _last_winner_index: null,

  init: function() {
    this._orig_list = wsc.peeps;
    this._curr_list = this._orig_list;
    this.$el = $('#raffle_text');
    this.textualize_it(this._create_display_text(), this._create_display_text());

    var self = this;
    $('#get_winner').on('click', function() {
      self.$el.textualizer('destroy');
      self.textualize_it(self._create_display_text(), self._raffle());
    });
  },

  textualize_it: function(display_text, display_item) {
    this.$el.textualizer(
      [
        display_text,
        display_item
      ],
      {
        duration: 500,
        rearrangeDuration: 500,
        effect: 'random',
        centered: true
      }
    );
    this.$el.attr('style', 'overflow: visible');
    this.$el.textualizer('start');
  },

  _raffle: function() {
    var num = this._random_num(this._curr_list);
    this._curr_winner = this._curr_list[num]
    this._curr_list = _.without(this._curr_list, this._curr_winner);
    return this._curr_winner;
  },

  _create_display_text: function() {
    var list = _.shuffle(_.clone(this._curr_list));
    var txt = "";

    for(var i=0; i < list.length; ++i) {
      txt += list[i] + " ";
    }

    return txt;
  },

  _random_num: function(list) {
    return Math.floor((Math.random()*list.length));
  }
};

wsc.raffle.init();
