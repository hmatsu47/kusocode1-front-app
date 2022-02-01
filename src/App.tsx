import { useEffect, useRef, useState } from 'react';

import { getApiData, postApiData } from './utils/apiHandler';
import { downloadBase64File } from './utils/download';
import { ItemApi, ImageApi,StatusApi } from './types/api';
import Header from './components/Header';
import Items from './components/Items';

function App() {
  const apiUrl = "./";
  // 画面ロード（false：ロード完了）
  const [isLoading, setIsLoading] = useState(true);
  // 写真リスト
  const [itemList, setItemList] = useState<ItemApi[]>([
    {
      pictureId: 0,
      title: '',
      description: '',
      count: 0
    }
  ]);
  // カウンタのリセット
  const resetCounter = () => {
    const postData = null;
    const load = async (): Promise<void> => {
      try {
        // eslint-disable-next-line
        const status: StatusApi = await postApiData(`${apiUrl}InitData`, postData);
      } catch (err) {
        console.log(err);
      }
    };
    void load();
    setTimeout(fetchItems, 200);
  }
  // 写真イメージのダウンロード
  const downloadImage = (pictureId: number) => {
    const load = async (): Promise<void> => {
      try {
        const image: ImageApi = await getApiData(`${apiUrl}GetImage?pictureId=${pictureId}`);
        const contentType: string = 'image/jpeg';
        const fileName: string = `picture-${pictureId}.jpg`;
        downloadBase64File(contentType, image.image, fileName);
      } catch (err) {
        console.log(err);
      }
    };
    void load();
  }
  // 写真リストの取得
  const fetchItems = () => {
    const load = async (): Promise<void> => {
      try {
        const items: ItemApi[] = await getApiData(`${apiUrl}ListItem`);
        setItemList(items);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    void load();
  }
  // 初期画面の写真リストを取得
  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, [setItemList])
  // ロード前は描画しない  
  if (isLoading) {
    return (
      <div className="App" />
    );
  }
  // 描画
  return (
    <div className="App">
      <Header
        fetchItems={fetchItems}
        resetCounter={resetCounter}
      />
      <Items
        itemList={itemList}
        downloadImage={downloadImage}
     />
    </div>
  );
}

export default App;
