rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:qinggge/alen2-ui.git &&
git push -f -u origin master &&
cd -
echo http://zhuhuang.me/alen2-ui/index.html