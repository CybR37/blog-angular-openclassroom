import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Premier Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet massa ligula, ut congue lorem porta id. Praesent feugiat lacinia metus vel sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel mattis elit. In eget iaculis felis, iaculis vestibulum augue. Curabitur aliquet varius felis eu eleifend. Donec quis imperdiet nibh. Nam massa nisi, porta et suscipit sit amet, ultrices nec ex. Etiam dignissim scelerisque pellentesque. Donec in augue at risus tempor consectetur eu et ex. Etiam at venenatis dui. Nunc vel enim ut massa tristique mollis. Nulla facilisi. Integer maximus ligula sapien, at accumsan urna imperdiet ut. Cras eu nulla feugiat, blandit urna at, suscipit augue. Sed posuere, arcu sit amet placerat elementum, tellus ipsum tincidunt libero, vitae imperdiet ante mauris vel arcu.',
      loveIts: 3,
      created_at: new Date(2019, 9, 18)
    },
    {
      title: 'Deuxième Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet massa ligula, ut congue lorem porta id. Praesent feugiat lacinia metus vel sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel mattis elit. In eget iaculis felis, iaculis vestibulum augue. Curabitur aliquet varius felis eu eleifend. Donec quis imperdiet nibh. Nam massa nisi, porta et suscipit sit amet, ultrices nec ex. Etiam dignissim scelerisque pellentesque. Donec in augue at risus tempor consectetur eu et ex. Etiam at venenatis dui. Nunc vel enim ut massa tristique mollis. Nulla facilisi. Integer maximus ligula sapien, at accumsan urna imperdiet ut. Cras eu nulla feugiat, blandit urna at, suscipit augue. Sed posuere, arcu sit amet placerat elementum, tellus ipsum tincidunt libero, vitae imperdiet ante mauris vel arcu.',
      loveIts: 1,
      created_at: new Date(2012, 5, 1)
    },
    {
      title: 'Troisième Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet massa ligula, ut congue lorem porta id. Praesent feugiat lacinia metus vel sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel mattis elit. In eget iaculis felis, iaculis vestibulum augue. Curabitur aliquet varius felis eu eleifend. Donec quis imperdiet nibh. Nam massa nisi, porta et suscipit sit amet, ultrices nec ex. Etiam dignissim scelerisque pellentesque. Donec in augue at risus tempor consectetur eu et ex. Etiam at venenatis dui. Nunc vel enim ut massa tristique mollis. Nulla facilisi. Integer maximus ligula sapien, at accumsan urna imperdiet ut. Cras eu nulla feugiat, blandit urna at, suscipit augue. Sed posuere, arcu sit amet placerat elementum, tellus ipsum tincidunt libero, vitae imperdiet ante mauris vel arcu.',
      loveIts: 9,
      created_at: new Date(2014, 4, 9)
    },
    {
      title: 'Quatrième Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet massa ligula, ut congue lorem porta id. Praesent feugiat lacinia metus vel sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel mattis elit. In eget iaculis felis, iaculis vestibulum augue. Curabitur aliquet varius felis eu eleifend. Donec quis imperdiet nibh. Nam massa nisi, porta et suscipit sit amet, ultrices nec ex. Etiam dignissim scelerisque pellentesque. Donec in augue at risus tempor consectetur eu et ex. Etiam at venenatis dui. Nunc vel enim ut massa tristique mollis. Nulla facilisi. Integer maximus ligula sapien, at accumsan urna imperdiet ut. Cras eu nulla feugiat, blandit urna at, suscipit augue. Sed posuere, arcu sit amet placerat elementum, tellus ipsum tincidunt libero, vitae imperdiet ante mauris vel arcu.',
      loveIts: 7,
      created_at: new Date(2016, 0, 1)
    },
  ]
}

interface Post {
  title: string,
  content: string,
  loveIts: number,
  created_at: Date
}