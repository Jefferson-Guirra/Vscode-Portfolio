import { FolderComposite } from '@/utils/folder-composite'
import { CreateFolder } from '@/utils/create-folder'
import { FolderInterface } from '@/@types/folder'

const makeFolder = (
  folderName: string,
  files: Array<string | FolderInterface>
): FolderInterface => {
  const folderElement = new CreateFolder(folderName)
  for (const file of files) {
    folderElement.add(file)
  }
  return folderElement
}

export const makeRootFolder = (): FolderComposite => {
  const src = new CreateFolder('src')
  const folderComposite = new FolderComposite()
  const presentation = makeFolder('presentation', ['home.tsx', 'test.tsx'])
  const about = makeFolder('about', ['about.tsx', 'test.tsx'])
  const about2 = makeFolder('about2', ['about.tsx', 'test.tsx'])
  about.add(about2)
  src.add(presentation)
  src.add(about)
  folderComposite.add(src)

  return folderComposite
}
