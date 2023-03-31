import { FolderComposite } from '@/utils/folder-composite'
import { MakeFolderElement } from '@/utils/create-folder'
import { FolderInterface } from '@/@types/folder'

const makeFolder = (folderName: string, files: string[]): FolderInterface => {
  const folderElement = new MakeFolderElement(folderName)
  for (const file of files) {
    folderElement.add(file)
  }
  return folderElement
}

export const makeRootFolder = (): FolderComposite => {
  const presentation = makeFolder('presentation', ['home.tsx', 'test.tsx'])
  const about = makeFolder('about', ['about.tsx', 'test.tsx'])
  const about2 = makeFolder('about2', ['about.tsx', 'test.tsx'])
  about.add(about2)
  const src = new MakeFolderElement('src')
  src.add(presentation)
  src.add(about)
  const folderComposite = new FolderComposite()
  folderComposite.add(src)

  return folderComposite
}
