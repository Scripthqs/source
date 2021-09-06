now=$(date "+%Y-%m-%d %H:%M:%S")
echo "进入项目目录"
cd D:/user/Desktop/scripthqs/note
echo "开始提交"
git add -A && git commit -m "$now" && git pull && git push
echo "提交完成"
read