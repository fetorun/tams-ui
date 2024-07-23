# sync fork

    1. git remote add upstream https://github.com/element-plus/element-plus.git
    2. git fetch upstream
    3. git merge upstream/dev

# Added extended date parser: tamsParseDate

# Added system now: tamsNow

# Added date picker visible pre-condition: tamsOpenOnFocus

# Yeni Eklenebilecek Özellikler

    1. Button tooltip ile sarmallanabilir. Ancak bu otomasyon test lerinde refaktöre neden olacaktır.
    2. Select içindeki loading ikonu artık özelleştirelebiliyor. Bu özellik kullanılarak TavLoading select menü de görünebilir. Sarmallama ile çözülürse yine otomasyon test lerinde refaktör gerektirecektir.
    3. Form Item da label yanına soru ikonu eklenerek tooltip ile ek bilgiler verilebilir. Ancak bu otomasyon test lerinde refaktöre neden olacaktır.
