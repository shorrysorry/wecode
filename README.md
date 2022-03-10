## git init

---

> 해당 폴더(git 으로 버전 관리를 하기 위한 폴더)로 이동 후 git init 명령어를 실행하면 새로운 저장소가 생성 됩니다.
> 위 명령어를 실행하면 저장소 구성을 위한 .git 폴더가 생성되며 이 폴더에는 프로젝트 관리를 위한 파일 들과 해당 프로젝트에만 적용할 config 파일 등이 들어있습니다.

## git add 파일명

---

> 우리가 작업하는 폴더를 작업트리(Working directory) 라고 부르며 commit을 실행하기 전에 작업트리와 저장소 사이에 존재하는 가상의 준비 영역(Staging Area)을 인덱스(Index)라고 합니다.
> 저장소에 commit하기 위해서 먼저 추가(Untracked files) 및 변경(Modified files) 하고자 하는 파일을 먼저 인덱스에 기록(Stage)하고 이후 스테이징된 목록만 최종적으로 commit 명령어에 의해 저장소에 공개하게 됩니다.

## git commit -m `커밋메세지`

---

> 스테이징된 목록들을 commit 명령어에 의해 저장소에 공개한다.
> $ git log 를 통해서 커밋 이력을 확인할 수 있다.

## git push origin master (혹은 다른 branch 이름)

---

> 현재 폴더를 그대로 업로드 하는 것이 아니라, 지금까지의 이력/버전(commit)을 push 하는 것입니다.
> 그래서 Working directory, Staging area의 변경사항들은 원격저장소로 push 되지 않습니다.
> 따라서, push 전에 $ git status , $ git log 를 통해서 확인하는 습관을 가져야합니다.
