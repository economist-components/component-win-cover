import WinCover from './index.es6';
import React from 'react';


const entries = [
  {
    tabtitle: '2015',
    title: 'Adam Polson',
    imagemobile: '',
    imagedesktop: 'http://lorempixel.com/g/1190/624/cats',
    bodycopy: `<h2>This is copy for entry 1</h2>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare hoc videndum est, possitne nobis hoc ratio
    philosophorum dare. Laboro autem non sine causa;Eam tum adesse, cum dolor omnis absit; Quam ob rem tandem,
    inquit, non satisfacit? Hoc est non modo cor non habere, sed ne palatum quidem.
    </p>
    <p>
    Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.Ita multo
    sanguine profuso in laetitia et in victoria est mortuus.
    </p>
    <p>
    Oratio me istius philosophi non offendit; Quamquam id quidem, infinitum est in hac urbe; Animum autem
    reliquis rebus ita perfecit, ut corpus; De ingenio eius in his disputationibus, non de moribus quaeritur.
    Rhetorice igitur, inquam, nos mavis quam dialectice disputare? Nec vero sum nescius esse utilitatem in
    historia, non modo voluptatem. Claudii libidini, qui tum erat summo ne imperio, dederetur.
    </p>`,
  },
  {
    tabtitle: '2016',
    title: 'Adam Polson',
    imagemobile: '',
    imagedesktop: 'http://lorempixel.com/g/1190/624/people',
    bodycopy: `<h2>This is copy for entry 2</h2>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare hoc videndum est, possitne nobis hoc ratio
    philosophorum dare. Laboro autem non sine causa;Eam tum adesse, cum dolor omnis absit; Quam ob rem tandem,
    inquit, non satisfacit? Hoc est non modo cor non habere, sed ne palatum quidem.
    </p>
    <p>
    Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.Ita multo
    sanguine profuso in laetitia et in victoria est mortuus.
    </p>
    <p>
    Oratio me istius philosophi non offendit; Quamquam id quidem, infinitum est in hac urbe; Animum autem
    reliquis rebus ita perfecit, ut corpus; De ingenio eius in his disputationibus, non de moribus quaeritur.
    Rhetorice igitur, inquam, nos mavis quam dialectice disputare? Nec vero sum nescius esse utilitatem in
    historia, non modo voluptatem. Claudii libidini, qui tum erat summo ne imperio, dederetur.
    </p>`,
  },
  {
    tabtitle: '2017',
    title: 'Adam Polson',
    imagemobile: '',
    imagedesktop: 'http://lorempixel.com/g/1190/624/city',
    bodycopy: `<h2>This is copy for entry 3</h2>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare hoc videndum est, possitne nobis hoc ratio
    philosophorum dare. Laboro autem non sine causa;Eam tum adesse, cum dolor omnis absit; Quam ob rem tandem,
    inquit, non satisfacit? Hoc est non modo cor non habere, sed ne palatum quidem.
    </p>
    <p>
    Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.Ita multo
    sanguine profuso in laetitia et in victoria est mortuus.
    </p>
    <p>
    Oratio me istius philosophi non offendit; Quamquam id quidem, infinitum est in hac urbe; Animum autem
    reliquis rebus ita perfecit, ut corpus; De ingenio eius in his disputationibus, non de moribus quaeritur.
    Rhetorice igitur, inquam, nos mavis quam dialectice disputare? Nec vero sum nescius esse utilitatem in
    historia, non modo voluptatem. Claudii libidini, qui tum erat summo ne imperio, dederetur.
    </p>`,
  },
  {
    tabtitle: '2018',
    title: 'Adam Polson',
    imagemobile: '',
    imagedesktop: 'http://lorempixel.com/g/1190/624/nature',
    bodycopy: `<h2>This is copy for entry 4</h2>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare hoc videndum est, possitne nobis hoc ratio
    philosophorum dare. Laboro autem non sine causa;Eam tum adesse, cum dolor omnis absit; Quam ob rem tandem,
    inquit, non satisfacit? Hoc est non modo cor non habere, sed ne palatum quidem.
    </p>
    <p>
    Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.Ita multo
    sanguine profuso in laetitia et in victoria est mortuus.
    </p>
    <p>
    Oratio me istius philosophi non offendit; Quamquam id quidem, infinitum est in hac urbe; Animum autem
    reliquis rebus ita perfecit, ut corpus; De ingenio eius in his disputationibus, non de moribus quaeritur.
    Rhetorice igitur, inquam, nos mavis quam dialectice disputare? Nec vero sum nescius esse utilitatem in
    historia, non modo voluptatem. Claudii libidini, qui tum erat summo ne imperio, dederetur.
    </p>`,
  },
]


export default (
  <WinCover onChangeIndex="" prevNext="arrows" entries={entries}/>
);
