# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Comic.destroy_all
User.destroy_all

@user = User.create!(username: 'user', email: 'user@email.com', password: '123456')
@another = User.create!(username: 'another', email: 'user2@email.com', password: '123456')


puts "#{User.count} users created"

@comic1 = Comic.create!(title: 'Garfield', author: 'Jim Davis', summary: 'July 08, 1980', image_url: 'https://i.pinimg.com/originals/e7/eb/b0/e7ebb04203a1c55e2a7fc1412393e916.gif', user: @user)

@comic2 = Comic.create!(title: 'Garfield', author: 'Jim Davis', summary: 'July 27, 1981', image_url: 'https://i.pinimg.com/originals/86/c3/d9/86c3d9307a5450b39f301dec38cd96c0.gif', user: @user)

@comic3 = Comic.create!(title: 'Cyanide & Happiness', author: 'Ron DenBleyker', summary: 'October 16, 2020', image_url: 'https://files.explosm.net/comics/Rob/halloween.png?t=295289', user: @another)

@comic4 = Comic.create!(title: 'Garfield', author: 'Jim Davis', summary: 'July 21, 2020', image_url: 'https://img.koreatimes.co.kr/upload/newsV2/images/202007/3cfbb55b62184eabba3a05b8e8eac971.jpg', user: @another)

puts "#{Comic.count} comic strips created"


Comment.create!(content: 'I love Garfield!', user: @another, comic: @comic1)

Comment.create!(content: 'LOL', user: @user, comic: @comic1)

Comment.create!(content: 'Spooky', user: @user, comic: @comic3)

Comment.create!(content: 'LOL!', user: @another, comic: @comic3)

puts "#{Comment.count} comments created"