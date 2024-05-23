import {module} from 'inversify-sugar';
import {PostModule} from './post/PostModule';
import {CoreModule} from './core/CoreModule';
import {LessonModule} from './lesson/LessonModule';

@module({
  imports: [CoreModule, PostModule, LessonModule],
})
export default class AppModule {}
