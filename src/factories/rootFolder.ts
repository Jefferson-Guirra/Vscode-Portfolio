import { FolderComposite } from '@/utils/folder-composite'
import { CreateFolder } from '@/utils/create-folder'
import { FolderInterface } from '@/@types/folder'

const makeFolder = (
  folderName: string,
  files: Array<string | FolderInterface>,
  folderFather: FolderInterface
): FolderInterface => {
  const folderElement = new CreateFolder(folderName)
  folderFather.add(folderElement)
  for (const file of files) {
    folderElement.add(file)
  }
  return folderElement
}

export const makeRootFolder = (): FolderComposite => {
  //ROOT FILES
  const portfolio = new CreateFolder('portfolio')
  const rootFolder = new FolderComposite()
  rootFolder.add(portfolio)

  //CHILDREN OF ROOT  FOLDER FILES
  const src = new CreateFolder('src')
  portfolio.add(src)
  makeFolder('presentation', ['home.tsx', 'test.tsx'], src)
  const about = makeFolder('about', ['about.tsx', 'test.tsx'], src)
  makeFolder('about2', ['about.tsx', 'test.tsx'], about)

  return rootFolder
}
