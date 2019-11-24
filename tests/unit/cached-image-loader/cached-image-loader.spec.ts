import CachedImageLoader from '@/cached-image-loader';
import ImageItem from '@/image-item';

describe('CachedImageLoader', () => {
  describe('ready', () => {
    it('全ての画像読込後にreadyイベントをemitすること', async () => {
      const imageItem = createImage();
      const loader = new CachedImageLoader([imageItem], resolveCache);
      const spy = jest.fn();

      loader.on('ready', spy);
      await dummyLoad();
      expect(spy).toBeCalled();
    });
  });

  describe('progress', () => {
    it('渡された画像の回数分emitされること', async () => {
      const images = [createImage(), createImage()];
      const loader = new CachedImageLoader(images, resolveCache);
      const spy = jest.fn();

      loader.on('progress', spy);
      await dummyLoad();
      expect(spy.mock.calls.length).toBe(2);
    });
  });

  describe('error', () => {
    it('エラーがおきたらerrorイベントをemitすること', async () => {
      const imageItem = createImage();
      const loader = new CachedImageLoader([imageItem], rejectCache);
      const spy = jest.fn();

      loader.on('error', spy);
      await dummyLoad();
      expect(spy).toBeCalled();
    });
  });

  describe('#size()', () => {
    it('渡された画像の数を返却すること', () => {
      const images = [createImage(), createImage()];
      const loader = new CachedImageLoader(images, resolveCache);
      expect(loader.size).toBe(2);
    });
  });
});

function resolveCache(image: ImageItem): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, 1);
  });
}

function rejectCache(image: ImageItem): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(reject, 1);
  });
}

async function dummyLoad() {
  return new Promise((resolve) => {
    // FIXME: fragileでない？？
    setTimeout(resolve, 10);
  });
}

function createImage() {
  return new ImageItem({ src: 'hoge', caption: 'piyo' });
}
