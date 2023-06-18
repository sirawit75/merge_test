# merge_test


ในการทดสอบการ merge ครั้งนี้ library ที่ใช้ทดสอบคือ jest
1. run คำสั่ง yarn init เพื่อเริ่มต้นโปรเจค
2. ทำการติดตั้ง libray ที่จำเป็นต่อการทดสอบครั้งนี้ เช่น jest @types/jest typescript ts-jest โดยผ่านคำสั่ง yarn add -D jest @types/jest typescript ts-jest
3. สร้าง file tsconfig.json เพื่อตั้งค่า typescript
4. ใน package.json เราจะเพิ่มคำสั่งใน script เข้าไปเพื่อทำใช้ในการ run test และกำหนดการตั้งค่าของ jest ให้ทดสอบเฉพาะ file ที่มีนามสกุล *.test.ts 
5. วิธีการ run test คือใช้คำสั่ง yarn test 
