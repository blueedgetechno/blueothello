'use babel';

import BlueothelloView from './blueothello-view';
import {
  CompositeDisposable,
  Disposable
} from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable(
      atom.workspace.addOpener(uri => {
        if (uri === 'atom://blueothello')
          return new BlueothelloView();
      }),

      atom.commands.add('atom-workspace', {
        'blueothello:toggle': () => this.toggle()
      }),

      new Disposable(() => {
        atom.workspace.getPaneItems().forEach(item => {
          if (item instanceof BlueothelloView) {
            item.destroy();
          }
        })
      })
    );
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  toggle() {
    let blueOthelloViews = atom.workspace
      .getPaneItems()
      .filter(item => item instanceof BlueothelloView)
    atom.workspace.open(blueOthelloViews[0] || 'atom://blueothello');
  }
};
