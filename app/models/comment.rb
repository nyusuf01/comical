class Comment < ApplicationRecord
  validates :content, length: {maximum: 600}
  belongs_to :comic
  belongs_to :user
end
