import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import string
from string import punctuation
import numpy as np
import pandas as pd

punctuation = list(punctuation)
stopwords = stopwords.words('english')

def words(data):

  tokens = word_tokenize(data)

  cleaned_tokens = [token for token in tokens if token not in stopwords

                    and token not in punctuation]

  count = pd.value_counts(np.array(cleaned_tokens))

  d = count.to_dict()

  return d

  # all_words = word_tokenize(data)

  # print(all_words)

  # count.to_csv('count.csv', sep=',', index=True)