class Comic < ApplicationRecord
  validates :title, presence: true
  validates :author, presence: true
  validates :image_url, presence: true
  validates :summary, presence: true, length: {maximum: 700}
  belongs_to :user
  has_many :comments, dependent: :destroy
end
