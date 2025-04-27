#!/usr/bin/env bash
#clear
echo "*****************************************************************************************"
echo "Running Startgate Tests :  $(date +"%A, %Y/%m/%d - %H:%M")"
#echo "(By Gerson Almeida - 2025/04)"
echo "*****************************************************************************************"
echo ""
Tpwd=$(pwd)
echo "Tpwd dir:  " $Tpwd

echo ""
rm -r $Tpwd/allure-results/*
rm -r $Tpwd/allure-report/*
#echo 'name:  ' $1


echo "****************************************************************************************"
echo ""


#npx playwright test --ui

npx playwright test --headed
echo
echo "=======================> End Tests Cases"
echo



##--Allure-------------------------------------------------------------------------------------------

#npx allure serve allure-results
npx allure generate --clean $Tpwd/allure-results -o $Tpwd/allure-report  --single-file --name "Exempel_Gerson" --lang "en"

start chrome --new-window  $Tpwd/allure-report/index.html

echo "*****************************************************************************************"
echo "Finished Running Tests :  $(date +"%A, %Y/%m/%d - %H:%M")"
echo "*****************************************************************************************"

